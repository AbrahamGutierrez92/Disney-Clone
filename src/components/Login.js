import styled from 'styled-components';

const Login = (props) => {
    return(
        <Container>
           <Content>
               <CTA>
                   <CTALogoOne src="/images/cta-logo-one.svg"/>
                   <SingUp>GET ALL THERE</SingUp>
                   <Description>
                     Enjoy the big screen experience on your TV, or watch on your tablet, laptop, phone and more. You can watch an ever-growing selection of titles in 4K. Plus, you can stream on 4 screens at once, so everyone’s happy. Only $25
                   </Description>
                   <CTALogoTwo src="/images/cta-logo-two.png"/>
               </CTA>
               <BgImage/>
           </Content>
        </Container>
    );
};

const Container = styled.section`
 overflow: hidden;
 display: flex;
 flex-direction: column;
 text-align: center;
 height: 100vh;
`;
const Content = styled.div`
 margin-bottom: 10uw;
 width: 100%;
 position: relative;
 min-height: 100vh;
 box-sizing: boder-box;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding: 80px 40px;
 height: 100%;
`;

const BgImage = styled.div`
 width: 100%;
 height: 100%;
 background-position: top;
 background-size: cover;
 background-repeat: no-repeat;
 background-image: url("https://cannonball-cdn.bamgrid.com/assets/originals/5BrandsNew_Desktop_LAS_(1)-1.jpg");
 position: absolute;
 top: 0;
 right: 0;
 left: 0;
 z-index: -1;
`;

const CTA = styled.div`
 max-width: 650px;
 width: 100%;
 display: flex;
 flex-direction: column
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 400px;
  min-height: 1px;
  display: block;
  width: 100%;
  margin: auto;
`;

const SingUp = styled.a`
 font-weight: bold;
 color: #f9f9f9;
 background-color: #0063e5;
 margin-bottom: 12px;
 width: 100%;
 letter-spacing: 1.5px;
 font-size: 18px;
 padding: 15.5px 0;
 border: 1px solid transparent;
 border-radius: 4px;
 cursor: pointer;

 &:hover{
    background-color: #0483ee;
 }
`;

const Description = styled.h2`
 color: hsla(0, 0%, 95.3%, 1);
 font-size: 13px;
 margin: 0 0 24px;
 letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
 max-width: 600px;
 margin-bottom: 20px;
 display: inline-block;
 vertical-align: bottom;
 width: 100%;
`;
export default Login;
