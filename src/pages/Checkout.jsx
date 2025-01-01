import React from 'react'
import Container from '../layer/Container'
import Text from '../layer/Text'

const Checkout = () => {
  return (
    <>
    <div className="py-20">
        <Container>
            <Text texts={"Checkout"} as={"h3"} className={"text-4xl font-bold pt-5 font-dmSans pb-20 text-DDC"}/>
        </Container>
    </div>
    </>
  )
}

export default Checkout