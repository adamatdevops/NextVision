/**
 * This code was generated by Builder.io.
 */
import * as React from "react";
import styled from "styled-components";
import { Button } from "@aws-amplify/ui-react";

export default function Login() {
    const xsmall = '../../assets/img/login/img1/width100.png';
    const small = '../../assets/img/login/img1/width200.png';
    const medium = '../../assets/img/login/img1/width800.png';
    const large = '../../assets/img/login/img1/width1200.png';
    const xlarge = '../../assets/img/login/img1/width1600.png';
    const xxlarge = '../../assets/img/login/img1/width2000.png ';
    const customsize1 = '../../assets/img/login/img1/width1346.png';
    const customsize2 = '../../assets/img/login/img2/img2.svg';
    const customsize3 = '../../assets/img/login/img3/img3.svg';
    const customsize4 = '../../assets/img/login/img4/img4.svg';

    return (
        <Div>
            <Div2>
                <Img
                    loading="lazy"
                    src={customsize1}
                    srcSet={` ${xsmall} 100w, ${small} width200w, ${medium} width800w,  ${large} width1200w,  ${xlarge} width1600w, ${xxlarge}width2000w, ${customsize1} width1440w`}
                />
                <Div3>
                    <Img2
                        loading="lazy"
                        src={customsize2}
                        srcSet={` ${customsize2}`}
                    />
                    <Div4>Sign in</Div4>
                    <Div5>
                        <Div6>Email or phone number</Div6>
                        <Div7 />
                    </Div5>
                    <Div8>
                        <Div9>
                            <Div10>Password</Div10>
                            <Div11>
                                <Img3
                                    loading="lazy"
                                    src={customsize3}
                                    srcSet={` ${customsize3}`}
                                />
                                <Div12>Hide</Div12>
                            </Div11>
                        </Div9>
                        <Div13 />
                    </Div8>
                    <Button1>Sign in</Button1>
                    <Div14>
                        <Div15>
                            <Img4
                                loading="lazy"
                                src={customsize3}
                                srcSet={` ${customsize4}`}
                            />
                            <Div16>Remember me</Div16>
                        </Div15>
                        <Div17>Need help?</Div17>
                    </Div14>
                    <Div18>
                        <span style={{ color: "rgba(61,143,169,1)" }}>
                            Don’t have an account?{" "}
                        </span>
                        <span style={{ fontWeight: 500, color: "rgba(234,225,225,1)" }}>
                            Sign up
                        </span>{" "}
                    </Div18>
                    <Div19>
                        <span style={{ color: "rgba(61,143,169,1)" }}>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
                        </span>
                        Learn more.
                    </Div19>
                </Div3>
            </Div2>
        </Div>
    );
}
const Div = styled.div`
  backdrop-filter: blur(7.5px);
  border-color: rgba(217, 120, 120, 0.18);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(217, 120, 120, 0.26);
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  justify-content: center;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 960px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 80px 60px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;
const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
const Div3 = styled.div`
  position: relative;
  border-radius: 24px;
  box-shadow: 0px 0px 17.4px 0px rgba(234, 221, 221, 0.21) inset;
  border-color: rgba(201, 178, 115, 0.18);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(201, 178, 115, 0.16);
  display: flex;
  width: 539px;
  max-width: 100%;
  flex-direction: column;
  margin: 35px 0 12px;
  padding: 24px 14px 77px 40px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;
const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  align-self: end;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;
const Div4 = styled.div`
  color: #fbfbfb;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: #eeefbc;
  border-color: rgba(238, 239, 188, 1);
  border-style: solid;
  border-width: 1px;
  margin-top: 32px;
  font: 500 32px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const Div5 = styled.div`
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  color: rgba(244, 242, 242, 0.8);
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const Div6 = styled.div`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const Div7 = styled.div`
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    rgba(219, 145, 77, 0) 0%,
    rgba(184, 32, 105, 0.25) 100%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  margin-top: 4px;
  height: 56px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const Div8 = styled.div`
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  white-space: nowrap;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;
const Div9 = styled.div`
  padding-right: 35px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 100%;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
    white-space: initial;
  }
`;
const Div10 = styled.div`
  color: #fbf2f2;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Poppins, sans-serif;
`;
const Div11 = styled.div`
  align-self: start;
  display: flex;
  gap: 11px;
  color: rgba(245, 236, 236, 0.8);
  text-align: right;
  flex: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;
const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Div12 = styled.div`
  font-family: Poppins, sans-serif;
`;
const Div13 = styled.div`
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    rgba(219, 145, 77, 0.15) 0%,
    rgba(184, 32, 105, 0.15) 100%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  margin-top: 4px;
  height: 56px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const Button1 = styled(Button)`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: #ebebd0;
  border-color: rgba(235, 235, 208, 1);
  border-style: solid;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  color: #fbfbfb;
  text-align: center;
  font: 24px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const Div14 = styled.div`
  justify-content: end;
  display: flex;
  margin-top: 8px;
  width: 100%;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
const Div15 = styled.div`
  display: flex;
  gap: 8px;
  color: #fcefef;
  padding: 8px 8px 8px 0;
`;
const Img4 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  align-self: start;
`;
const Div16 = styled.div`
  font-family: Poppins, sans-serif;
`;
const Div17 = styled.div`
  font-family: Poppins, sans-serif;
  color: #d8cbcb;
  text-align: center;
  justify-content: center;
  margin: auto 0;
  padding: 2px;
`;
const Div18 = styled.div`
  text-decoration-line: underline;
  margin-top: 64px;
  color: #eae1e1;
  justify-content: center;
  padding: 2px;
  font: 16px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;
const Div19 = styled.div`
  color: #f2ebeb;
  margin-top: 8px;
  font: 16px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;