import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import HomeSS from "./assets/home-ss.png";
import WelcomeSS from "./assets/welcome-ss.png";
import ValueSS from "./assets/value-ss.png";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Typo from "./assets/typography.png";
import Colours from "./assets/colours.png";
import Stats from "./assets/stats.png";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const ContentWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(512px, 1fr));

    justify-content: center;
    align-content: center;
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        /* padding-left: 12px;
        padding-right: 12px; */
    }
`;

const LeftSide = styled.div`
    width: auto;
    height: 100vh;
    border-right: 1px solid #ddd9d9;

    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LeftSideHeroContent = styled.div``;
const RightSideHeroContent = styled.div``;

const RightSide = styled.div`
    width: auto;
    height: 100vh;
    background: #897fd3;

    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Tags = styled.span`
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    background: #f3f1f4;
    border-radius: 20px;
    color: #8d8c8e;
    font-weight: 600;
`;

const MainTitle = styled.h1`
    font-size: 32px;
    text-align: left;
    color: #423f4d;
    font-weight: 600;
    line-height: 150%;
    font-style: normal;
`;
const SmallTitle = styled.h4`
    color: #b2a9b6;
    font-size: 1rem;
    letter-spacing: 4px;
    margin-bottom: 48px;
    font-weight: 600;
`;

const SS = styled.img`
    width: "100%" !important;
    height: "auto" !important;

    border-radius: 60px;
    box-shadow: 0px 100px 182px rgba(0, 0, 0, 0.07),
        0px 41.7776px 76.0352px rgba(0, 0, 0, 0.0503198),
        0px 22.3363px 40.6521px rgba(0, 0, 0, 0.0417275),
        0px 12.5216px 22.7892px rgba(0, 0, 0, 0.035),
        0px 6.6501px 12.1032px rgba(0, 0, 0, 0.0282725),
        0px 2.76726px 5.03641px rgba(0, 0, 0, 0.0196802);
    :nth-child(2) {
        margin-left: 64px;
    }
    @media (max-width: 600px) {
        width: 60%;
        border-radius: 40px;
    }
`;

const BodyText = styled.p`
    font-size: 1rem;
    margin-top: 64px;
    line-height: 190%;
    font-family: "Merriweather";
    color: #423f4d;
    font-weight: 400;
`;

const UserFlow = styled.div`
    background: #f8f7f7;
    padding: 32px;
    padding-top: 200px;
    padding-bottom: 200px;
`;

const FlowCards = styled(motion.div)`
    display: flex;
    flex-direction: column;
    padding: 16px;
    background: white;
    border-radius: 12px;
    /* border: 1px solid #dbdbdb; */
    box-shadow: 0px 79px 163px rgba(0, 0, 0, 0.03),
        0px 33.0043px 68.0975px rgba(0, 0, 0, 0.0215656),
        0px 17.6457px 36.4082px rgba(0, 0, 0, 0.0178832),
        0px 9.89203px 20.4101px rgba(0, 0, 0, 0.015),
        0px 5.25358px 10.8397px rgba(0, 0, 0, 0.0121168),
        0px 2.18613px 4.51063px rgba(0, 0, 0, 0.00843437);
    :hover > h1 {
        color: #8d83da;
    }
`;

const FlowContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 24px;
`;

const VisLangWrapOut = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
`;

const VisLangWrapIn = styled.div`
    display: flex;
    justify-content: center;
`;

const FPS = styled.div`
    padding: 8px;
    margin-left: 8px;
    margin-right: 8px;
    padding-left: 16px;
    padding-right: 16px;
    background: #f8f7f7;
    border-radius: 20px;
    font-weight: 800;
    font-family: "Open Sans";
    color: "#fffff" !important;
`;

function App() {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    return (
        <div className="App">
            <ContentWrapper className="grid">
                {/* <Nav>
                    <Tags>Tom Smith</Tags>
                    <Tags>Mobile UI/UX</Tags>
                    <Tags>Final Year</Tags>
                </Nav> */}
                <LeftSide>
                    <LeftSideHeroContent>
                        <SmallTitle>001 // THE PRODUCT</SmallTitle>
                        <MainTitle>
                            A refined{" "}
                            <span
                                style={{ color: "#897fd3", fontWeight: "700" }}
                            >
                                diabetes management
                            </span>{" "}
                            application, for Type 1 diabetics.
                        </MainTitle>
                    </LeftSideHeroContent>
                </LeftSide>
                <RightSide>
                    <SS src={HomeSS}></SS>
                </RightSide>
                {isTabletOrMobile && (
                    <>
                        <RightSide style={{ background: "none" }}>
                            <div>
                                <SmallTitle>002 // THE PROBLEM</SmallTitle>

                                <div style={{ maxWidth: "60ch" }}>
                                    <MainTitle>
                                        “How might we improve the functionality
                                        and features of the CGM to ensure a
                                        better experience for diabetics using
                                        them?”
                                    </MainTitle>
                                    <BodyText>
                                        Through extensive research and user
                                        interviews it was concluded that whilst
                                        the current diabetes management
                                        applications are effective, they are
                                        also sub-optimal. There was room for
                                        vast improvements across multiple areas
                                        of the application. <br />
                                        <br />
                                        During the research phase, one of the
                                        largest pain points of the user
                                        experience came with the inability to
                                        set alarms for when the glucose levels
                                        fell below a certain level. Something
                                        that ensures the user knows when they
                                        are in dangerous glucose levels.
                                        <br />
                                        <br />I intended to create a much more
                                        refined experience for the user by
                                        reworking some of the existing UX
                                        patterns; but also improving on
                                        successful patterns already found in
                                        similar applications.
                                    </BodyText>
                                </div>
                            </div>
                        </RightSide>
                        <LeftSide style={{ background: "#F8F7F7" }}>
                            <SS src={ValueSS}></SS>
                        </LeftSide>
                    </>
                )}
                {isDesktop && (
                    <>
                        <LeftSide style={{ background: "#F8F7F7" }}>
                            <SS src={ValueSS}></SS>
                        </LeftSide>
                        <RightSide style={{ background: "none" }}>
                            <div>
                                <SmallTitle>002 // THE PROBLEM</SmallTitle>

                                <div style={{ maxWidth: "60ch" }}>
                                    <MainTitle>
                                        “How might we improve the functionality
                                        and features of the CGM to ensure a
                                        better experience for diabetics using
                                        them?”
                                    </MainTitle>
                                    <BodyText>
                                        Through extensive research and user
                                        interviews it was concluded that whilst
                                        the current diabetes management
                                        applications are effective, they are
                                        also sub-optimal. There was room for
                                        vast improvements across multiple areas
                                        of the application. <br />
                                        <br />
                                        During the research phase, one of the
                                        largest pain points of the user
                                        experience came with the inability to
                                        set alarms for when the glucose levels
                                        fell below a certain level. Something
                                        that ensures the user knows when they
                                        are in dangerous glucose levels.
                                        <br />
                                        <br />I intended to create a much more
                                        refined experience for the user by
                                        reworking some of the existing UX
                                        patterns; but also improving on
                                        successful patterns already found in
                                        similar applications.
                                    </BodyText>
                                </div>
                            </div>
                        </RightSide>
                    </>
                )}

                <LeftSide style={{ background: "none" }}>
                    <div>
                        <SmallTitle>003 // THE SOLUTION</SmallTitle>

                        <div style={{ maxWidth: "60ch" }}>
                            <MainTitle>
                                “A mature, multi-faceted{" "}
                                <span
                                    style={{
                                        fontWeight: "700",
                                        color: "#21E88C",
                                    }}
                                >
                                    diabetes management
                                </span>
                                {""} alternative. ”
                            </MainTitle>
                            <BodyText>
                                A simple user experience that allows the user to
                                manage their diabetes more easily. The intention
                                was to create something that was a joy to use as
                                opposed to a mass of confusion as some of these
                                medical related apps can be. <br />
                                <br />
                                It was key to extrapolate the pertinent data for
                                the user, and keep that at the forefront of the
                                experience; to make it as simple as possible for
                                the user to have full control over all the
                                variables in their diabetes.
                            </BodyText>
                        </div>
                    </div>
                </LeftSide>
                <RightSide style={{ background: "#21E88C" }}>
                    <SS src={ValueSS}></SS>
                </RightSide>
            </ContentWrapper>

            <UserFlow>
                <SmallTitle>004 // THE USER FLOW</SmallTitle>
                <FlowContent>
                    <FlowCards whileHover={{ y: -4 }}>
                        <MainTitle
                            style={{ color: "#A7A7A7", fontSize: "1rem" }}
                        >
                            01
                        </MainTitle>
                        <MainTitle style={{ fontSize: "1rem" }}>
                            User opens the app and logs in with their
                            credentials.
                        </MainTitle>
                    </FlowCards>
                    <FlowCards whileHover={{ y: -4 }}>
                        <MainTitle
                            style={{ color: "#A7A7A7", fontSize: "1rem" }}
                        >
                            02
                        </MainTitle>
                        <MainTitle style={{ fontSize: "1rem" }}>
                            User scans device with phone application, and awaits
                            results.
                        </MainTitle>
                    </FlowCards>
                    <FlowCards whileHover={{ y: -4 }}>
                        <MainTitle
                            style={{ color: "#A7A7A7", fontSize: "1rem" }}
                        >
                            03
                        </MainTitle>
                        <MainTitle style={{ fontSize: "1rem" }}>
                            Phone syncs with app, new values automatically
                            updated.
                        </MainTitle>
                    </FlowCards>
                    <FlowCards whileHover={{ y: -4 }}>
                        <MainTitle
                            style={{ color: "#A7A7A7", fontSize: "1rem" }}
                        >
                            04
                        </MainTitle>
                        <MainTitle style={{ fontSize: "1rem" }}>
                            User asked to set safe high/low blood sugar levels
                            in the app.
                        </MainTitle>
                    </FlowCards>
                    <FlowCards whileHover={{ y: -4 }}>
                        <MainTitle
                            style={{ color: "#A7A7A7", fontSize: "1rem" }}
                        >
                            05
                        </MainTitle>
                        <MainTitle style={{ fontSize: "1rem" }}>
                            User manually adds a blood test reading from earlier
                            in the day.
                        </MainTitle>
                    </FlowCards>
                    <FlowCards whileHover={{ y: -4 }}>
                        <MainTitle
                            style={{ color: "#A7A7A7", fontSize: "1rem" }}
                        >
                            06
                        </MainTitle>
                        <MainTitle style={{ fontSize: "1rem" }}>
                            Phone syncs with app, new values automatically
                            updated.
                        </MainTitle>
                    </FlowCards>
                </FlowContent>
            </UserFlow>

            <ContentWrapper className="grid">
                {/* <Nav>
                    <Tags>Tom Smith</Tags>
                    <Tags>Mobile UI/UX</Tags>
                    <Tags>Final Year</Tags>
                </Nav> */}

                <LeftSide>
                    <LeftSideHeroContent>
                        <SmallTitle>005 // THE TYPEFACE</SmallTitle>
                        <MainTitle>
                            A bold but beautiful type choice that provides
                            elegance and great communicative properties.
                        </MainTitle>
                        <BodyText>
                            Typeface choice is usually a diifcult decision. In
                            this instance it was important to have something
                            that was visually appealing; but also very effective
                            at communicating data. This is because when dealing
                            with sensitive data it is imperative that it is
                            easily legible and not easily confused. <br />
                            <br />
                            Amidst the visual overhaul it was important to have
                            a typeface that showed off the modern visuals and
                            accompany it accordingly. I also ensured that it was
                            versatile at different weights and that light body
                            text was still easily legible.
                        </BodyText>
                    </LeftSideHeroContent>
                </LeftSide>
                <RightSide>
                    <img
                        style={{ width: "70%", height: "auto" }}
                        src={Typo}
                    ></img>
                </RightSide>
                {isTabletOrMobile && (
                    <>
                        <RightSide style={{ background: "none" }}>
                            <div>
                                <SmallTitle>006 // THE COLOURS</SmallTitle>

                                <div style={{ maxWidth: "60ch" }}>
                                    <MainTitle>
                                        "A colour palette that expertly conveys
                                        the mood behind the screens; and aids
                                        the user in navigating the interface.”
                                    </MainTitle>
                                    <BodyText>
                                        The colours in contribute massively to
                                        the UX of the interface and allow for it
                                        to function effectively. The purple was
                                        chosen as a calming and welcoming colour
                                        that prevents the user from feeling
                                        overwhelmed before they enter the crux
                                        of the application. <br />
                                        <br />
                                        The other three 'bright' colours are
                                        used in the 'traffic light' system to
                                        ensure the user gets a visual response
                                        to accompany text values; allowing them
                                        to more easily determine if they are too
                                        high or too low. I wanted the colours to
                                        be recognisable but also modern, as a
                                        result I decided that pastel colours
                                        where more likely to give the
                                        application a more modern feel.
                                    </BodyText>
                                </div>
                            </div>
                        </RightSide>
                        <LeftSide style={{ background: "#F8F7F7" }}>
                            <img
                                style={{ width: "70%", height: "auto" }}
                                src={Colours}
                            ></img>
                        </LeftSide>

                        <LeftSide style={{ background: "none" }}>
                            <div>
                                <SmallTitle>
                                    007 // THE FINAL SCREENS
                                </SmallTitle>

                                <div style={{ maxWidth: "60ch" }}>
                                    <MainTitle>
                                        A considered and effective response to a
                                        shared issue amongst diabetics.
                                    </MainTitle>
                                    <BodyText>
                                        Upon review, the aim was to provide a
                                        modern approach to diabetes management,
                                        fast, intuitive and responsive; in
                                        response to the increased demands of
                                        modern society. <br />
                                        <br />
                                        In this instance, I feel as though I was
                                        able to provide an apt response to this
                                        brief. The designs included a fully
                                        prototyped{" "}
                                        <FPS
                                            style={{ display: "inline-block" }}
                                        >
                                            High FPS
                                        </FPS>
                                        output thatoffered access to examples
                                        off how all the new introduced features
                                        would work. <br />
                                        <br />
                                        Despite this, there were some concerns
                                        with some of the UI elements being
                                        poorly worded leading to bad UX,
                                        something that I will definitely change
                                        in a coming update. Below this I will
                                        leave a timer behind to say when I have
                                        refreshed the content on the site with
                                        new information.
                                    </BodyText>
                                </div>
                            </div>
                        </LeftSide>
                        <RightSide style={{ background: "#21E88C" }}>
                            <SS src={Stats}></SS>
                        </RightSide>
                    </>
                )}
                {isDesktop && (
                    <>
                        <RightSide style={{ background: "none" }}>
                            <div>
                                <SmallTitle>006 // THE COLOURS</SmallTitle>

                                <div style={{ maxWidth: "60ch" }}>
                                    <MainTitle>
                                        "A colour palette that expertly conveys
                                        the mood behind the screens; and aids
                                        the user in navigating the interface.”
                                    </MainTitle>
                                    <BodyText>
                                        The colours in contribute massively to
                                        the UX of the interface and allow for it
                                        to function effectively. The purple was
                                        chosen as a calming and welcoming colour
                                        that prevents the user from feeling
                                        overwhelmed before they enter the crux
                                        of the application. <br />
                                        <br />
                                        The other three 'bright' colours are
                                        used in the 'traffic light' system to
                                        ensure the user gets a visual response
                                        to accompany text values; allowing them
                                        to more easily determine if they are too
                                        high or too low. I wanted the colours to
                                        be recognisable but also modern, as a
                                        result I decided that pastel colours
                                        where more likely to give the
                                        application a more modern feel.
                                    </BodyText>
                                </div>
                            </div>
                        </RightSide>
                        <LeftSide style={{ background: "#F8F7F7" }}>
                            <img
                                style={{ width: "70%", height: "auto" }}
                                src={Colours}
                            ></img>
                        </LeftSide>
                        <RightSide style={{ background: "#21E88C" }}>
                            <SS src={Stats}></SS>
                        </RightSide>

                        <LeftSide style={{ background: "none" }}>
                            <div>
                                <SmallTitle>
                                    007 // THE FINAL SCREENS
                                </SmallTitle>

                                <div style={{ maxWidth: "60ch" }}>
                                    <MainTitle>
                                        A considered and effective response to a
                                        shared issue amongst diabetics.
                                    </MainTitle>
                                    <BodyText>
                                        Upon review, the aim was to provide a
                                        modern approach to diabetes management,
                                        fast, intuitive and responsive; in
                                        response to the increased demands of
                                        modern society. <br />
                                        <br />
                                        In this instance, I feel as though I was
                                        able to provide an apt response to this
                                        brief. The designs included a fully
                                        prototyped{" "}
                                        <FPS
                                            style={{ display: "inline-block" }}
                                        >
                                            High FPS
                                        </FPS>
                                        output thatoffered access to examples
                                        off how all the new introduced features
                                        would work. <br />
                                        <br />
                                        Despite this, there were some concerns
                                        with some of the UI elements being
                                        poorly worded leading to bad UX,
                                        something that I will definitely change
                                        in a coming update. Below this I will
                                        leave a timer behind to say when I have
                                        refreshed the content on the site with
                                        new information.
                                    </BodyText>
                                </div>
                            </div>
                        </LeftSide>
                    </>
                )}
            </ContentWrapper>
        </div>
    );
}

export default App;
