import {Grid, Stack, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PercentImage from '@/components/PercentImage'
import MainFrame from '@/components/MainFrame'
import {InferGetStaticPropsType} from 'next'
import {galleryList} from '@/data/galleryList'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'

// We need to load the list of galleries from the file system
// This is done at build time
export async function getStaticProps() {
    const galleries = galleryList()
    return {
        props: {
            galleries
        }
    }
}

// This is our home / about me page
export default function Index({galleries}: InferGetStaticPropsType<typeof getStaticProps>) {
    const meta = {
        title: 'My UI/UX and designs',
        description: 'Graphic portfolio by Me',
        url: '/about',
        keywords: 'design, mobile, ui/ux, graphic',
    }

    const date = new Date()
    return <MainFrame meta={meta} galleries={galleries} index="about">
        <Grid container spacing={0} sx={{display: 'flex', width: '100%'}}>
            <Grid item sm={8}>
                {/* Page title */}
                <Typography variant="h2">About Me</Typography>

                {/* Page content */}
                <Typography variant="body1">
                    Hi, I’m Edwin Mwiti — a passionate Software Developer and Graphic Designer based in Nairobi,Kenya.
                </Typography>
                <br/>
                <Typography variant="body1">
                     I’m passionate about creating beautiful, purposeful digital experiences that leave a lasting impression with an aesthetic touch.
                </Typography>
                <br/>
                <Typography variant="body1">
                     This is a website to display my graphic and UI/UX Designs
                </Typography>
                <br/>
                <Typography variant="body1">
                    
                    You can contact me at <a style={{color: 'coral'}}
                                                                href="mailto:emiti69@gmail.com">emwiti69@gmail.com</a>.
                </Typography>
                <br/>
            </Grid>

            {/*My photo is shown on the left, except for small breaks where it will be scaked*/}
            <Grid item xs={12} sm={4} sx={{minHeight: '15vh'}}>
                <PercentImage src="/images/me.jpg" alt="me" blur="/images/me-preview.jpg" width="80%"
                              height="100%"/>
            </Grid>

            {/*Out social links and signature / watermark are shown side by side, except for very small breaks where they will be stacked*/}
            <Grid item xs={12} sm={4} sx={{alignContent: 'center', display: 'flex', justifyContent: 'flex-start'}}>
                <Stack direction="column">
                    <Stack direction="row" spacing={1} sx={{m: 1}}>
                        <InstagramIcon/>
                        <div><a style={{color: 'coral'}} target="_insta"
                                href="https://www.instagram.com/i.amwitii/">i.amwitii</a></div>
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{m: 1}}>
                        <LinkedInIcon/> <a style={{color: 'coral'}} target="_linkedin"
                                           href="https://www.linkedin.com/in/edwin-mwiti-a20911207/">Edwin Mwiti</a>
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{m: 1}}>
                        <PersonSearchIcon/> <a style={{color: 'coral'}} target="_linkedin"
                                               href="https://edwin-mwiti.netlify.app/">My Website</a>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={4}
                  sx={{minHeight: '15vh', alignContent: 'center', display: 'flex', justifyContent: 'flex-start'}}>
                <PercentImage src="/images/logo.png" alt="My Logo"
                              blur="/images/logo-preview.png" width="80%" height="100%"/>
            </Grid>
            {/* Copyright at the bottom */}
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Typography variant="caption">&copy; {date.getFullYear()} Edwin Mwiti</Typography>
            </Grid>
            
        </Grid>
    </MainFrame>
}