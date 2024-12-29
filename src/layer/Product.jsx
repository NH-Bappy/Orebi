import React from 'react';
import PropTypes from 'prop-types';
import Badge from './Badge';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Flex from './Flex';
import Text from './Text';
import Compare from '../icons/Compare';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/slices/cartSlices';

const Product = (props) => {
  const {item, src, alt, className, Title, dollar, color, } = props;

const dispatch = useDispatch()
const handleAddtoCart = () =>{
  dispatch(addCart({ ...item, qtn: 1}));
}


  return (
    <div className="w-full pr-4">
      {/* Product Image */}
      <div className="relative group">
        <img src={src} alt={alt} className='w-[310px] h-[310px]'/>
      

      {/* Badge */}
        <Badge text={'new'} className={'absolute top-5 left-5'}/>
      {/* Hover Content */}
      <div className="w-full p-5 bg-ProductC absolute right-0 bottom-0 invisible group-hover:visible ho ">

        <Flex className="justify-end items-center gap-4 py-1">
          <Text
            texts={'Add to Wish List'}
            as={'button'}
            className={'text-sm font-dmSans text-mColor hover:text-black hover:font-bold'}/>
          <FaHeart />
        </Flex>

        <Flex className="justify-end items-center gap-4 py-2">
          <Text
            texts={'Compare'}
            as={'button'}
            className={'text-sm font-dmSans text-mColor hover:text-black hover:font-bold'}/>
            <Compare/>
        </Flex>

        <Flex className="justify-end items-center gap-4">
          <Text
          onClick={handleAddtoCart}
            texts={'Add to Cart'}
            as={'button'}
            className={'text-sm font-dmSans text-mColor hover:text-black hover:font-bold'}/>
          <FaShoppingCart />
        </Flex>

      </div>
      </div>

      {/* Product Info */}
      <Flex className="justify-between pt-2">
        <p className="text-mHC font-bold text-xl font-dmSans">{Title}</p>
        <p className="text-mColor text-base">{dollar}</p>
      </Flex>

      {/* Product Color */}
      {color && <span className="text-mColor text-base font-dmSans">{color}</span>}
    </div>
  );
};

// PropTypes Validation
Product.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  badgeText: PropTypes.string, // Dynamic badge text
  PH: PropTypes.string.isRequired, // Product heading
  dollar: PropTypes.string.isRequired, // Product price
  color: PropTypes.string, // Product color
};

// Default Props
Product.defaultProps = {
  src: '',
  alt: 'Product Image',
  className: '',
  badgeText: null,
  color: 'Black', // Default product color
};

export default Product;
