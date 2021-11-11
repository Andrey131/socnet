import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import { Image, Box, Grid, Text } from "@chakra-ui/react"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <Grid templateColumns="2fr 6fr" p={4}>           
            <Image  
                    boxSize="200px"
                    borderRadius="full"
                    src={props.profile.photos.large}/>

            <Box>
                <Text as="b" fontSize="5xl">{props.profile.fullName}</Text>  
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>   
            </Box>

        </Grid>
    );
}

export default ProfileInfo;