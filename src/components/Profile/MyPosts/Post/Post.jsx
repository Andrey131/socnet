import { Image, Box } from "@chakra-ui/react"


const Post = (props) => {
    return (

        <Box color="green.300" pt={4} borderWidth="1px" borderRadius="lg" >
            <Image 
                    display="inline-block"
                    boxSize="50px"
                    borderRadius="full"
                    mr={4}
                    src='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png' />
            {props.message}<br/>
            <Box >
                <Image
                        display="inline-block"
                        boxSize="20px"
                        src="https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-47.png"/> 
                {props.likesCount}
            </Box>
        </Box>

    );
}

export default Post;