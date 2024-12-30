import React from 'react'
import Container from '../layer/Container'
import Text from '../layer/Text'

const MyAccount = () => {
  return (
    <>
    <div className="py-20">
        <Container>
        <Text texts={"My Account"} as={"h2"} className={"text-4xl font-bold pt-5 font-dmSans pb-20 text-DDC"}/>
        </Container>
    </div>
    </>
  )
}

export default MyAccount