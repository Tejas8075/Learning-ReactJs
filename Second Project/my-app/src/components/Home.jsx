import { Box, Container, Heading, Image, Img, position, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assests/1.jpg";
import img2 from "../assests/2.jpg";
import img3 from "../assests/3.jpg";
import img4 from "../assests/4.jpg";
import img5 from "../assests/5.png";


const headingOptions = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl"
}

const Home = () => {
    return (
        <Box>
            <MyCarousel />

            <Container maxW={'container.xl'} minH={"100vh"} p={"16"} >
                <Heading textTransform={"uppercase"} py={"2"} w={'fit-content'} borderBottom={"2px solid"} m={"auto"} >
                    Services
                </Heading>

                <Stack h="full" p={"4"} alignItems={"center"} direction={["column", "row"]} >
                    <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />
                    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"} >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus maxime voluptatum. Eveniet laborum aliquam accusamus est natus nisi? Tenetur, facilis? Quidem tempora possimus eum! Voluptatem ea et minus magni odit quisquam voluptatibus quis quasi enim cum, harum iste hic fugiat ut provident assumenda. Distinctio dolore quod odio obcaecati, libero dolorem a quas deleniti repellendus consequatur pariatur quibusdam sapiente aperiam iste quam, nisi iusto ab molestias itaque eligendi, magni cupiditate sunt corrupti eaque. Dolorum ab expedita modi doloribus odit velit.
                    </Text>
                </Stack>

            </Container>
        </Box>
    )
};
const MyCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false} >
            <Box w="full" h={'100vh'} >
                <Image src={img1} />
                <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions} >
                    Watch The Future
                </Heading>
            </Box>
            <Box w="full" h={'100vh'} >
                <Image src={img2} />
                <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions} >
                    Future is Gaming
                </Heading>
            </Box>
            <Box w="full" h={'100vh'} >
                <Image src={img3} />
                <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions} >
                    Gaming on Console
                </Heading>
            </Box>
            <Box w="full" h={'100vh'} >
                <Image src={img4} />
                <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions} >
                    Night life is cool
                </Heading>
            </Box>
        </Carousel>
    )
}

export default Home;