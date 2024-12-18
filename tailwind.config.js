/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // container
      maxWidth: {
        Container: "1320px",
      },
      // container
      // google font
      fontFamily: {
        dmSans: ['DM Sans'],
      },
      // google font
      // text color
      colors: {
        mColor: '#767676',
        mHC: '#262626',
        categoryColor: '#F5F5F3',
        ProductC : '#ffffff8a',
        FooterColor: '#F5F5F3',
        DDC : '#262626'
      },
      // text color
      // Background Image\
      backgroundImage: {
        bannerImg:"url('/public/Group 10.png')",
        adImg:"url('/public/image/Ads_2.png')",
        promoImgOne:"url('/public/Ad_1.png')",
        promoImgTwo:"url('/public/Ad_2.png')",
        promoImgThree:"url('/public/Ad_3.pngg')",
        // product img
        productImg:"url('/public/image/Image.png')",
        productImgOne:"url('/public/image/Image (1).png')",
        productImgTwo:"url('/public/image/Image (2).png')",
        productImgThree:"url('/public/image/Image (3).png')",
        productImgfour:"url('/public/image/coca.jpg')",

        // ================
        PIF:"url('/public/image/Image(04).png')",
        PIFive:"url('/public/image/Image (05).png')",
        PIS:"url('/public/image/Image (06).png)",
        PISeven:"url('/public/image/Image (07).png')",
        // product img
        // specialOffer
        SOF:"url(../../public/image/Image (4).png)",
        SOFive:"url(../../public/image/Image (5).png",
        SOS:"url(../../public/image/Image (6).png",
        SOSeven:"url(../../public/image/Image (7).png",
        // specialOffer
        
      }
      // Background Image
    },
  },
  plugins: [],
}