import { ThemeProvider } from "@mui/material/styles";
import { makeStyles, styled } from "@mui/styles";
import theme from "../../Theme/Theme";
import { TabContext, TabList} from "@mui/lab";
import { Tab} from "@mui/material";
import { TabPanel } from "@mui/lab";
import { Typography } from "@mui/material";
import React, { useState } from "react";


let use = makeStyles({
    heading:{
        width: 200,
    },
    textStyling:{
        fontSize:16,
        textTransform:"none",
        color: "#03314B",
    },
    selectedTab: {
        color: "#03314B !important",
      },
    synopsisTypography: {
        lineHeight: "20.11px ",
        fontSize: "16px !important",
        color: '#03314B !important',
        position: 'relative',
        marginLeft: '-23px !important',
        
      },
      headingTypography: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: "20.11px !important",
        position: 'relative',
        left: 40,
        marginLeft: '-15px !important',
        fontFamily: 'Cera Pro',
        textTransform: 'none',
        textAlign:'center'
      }
    })

    let SynopsisStyling= styled("div")({
        width:600,
        height: 100,
    });
    
    export const BookDetails=()=>{
        const [value, setValue] = useState("1");
        const changeEvent =(event: React.SyntheticEvent, v: string)=>{
            setValue(v);
        }
        let styles= use();

       return(
           <ThemeProvider theme={theme}>
            <TabContext value={value}>
             <TabList onChange={changeEvent}
                textColor='primary'>
               
                <Tab
                classes={{ selected: styles.selectedTab }}
                label={
                  <span className={styles.headingTypography}>   Synopsis</span>
                }
                value="1"
                sx={{
                  width: 200,
                  alignItems: "flex-start",
                }}
              />
              <Tab
                classes={{ selected: styles.selectedTab }}
                label={
                  <span className={styles.headingTypography}>
                    Who is it for?
                  </span>
                }
                value="2"
                sx={{
                  width: 200,
                  alignItems: "flex-start",
                }}
              />
              <Tab
                classes={{ selected: styles.selectedTab }}
                label={
                  <span className={styles.headingTypography}>
                    About the author
                  </span>
                }
                value="3"
                sx={{
                  width: 200,
                  alignItems: "flex-start"
                }}
              />
              </TabList>
              <TabPanel value="1">
                <SynopsisStyling>
                  <Typography variant="body2" textAlign='start' className={styles.synopsisTypography}>
                  Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",

                  </Typography>
                </SynopsisStyling>
              </TabPanel>
              <TabPanel value="2" >
                <SynopsisStyling>
                 <Typography variant="body2" textAlign='start' className={styles.synopsisTypography}>
                   Entreprenur
                 </Typography>
                </SynopsisStyling>
              </TabPanel>
              <TabPanel value="3">
                <SynopsisStyling>
                  <Typography variant="body2" className={styles.synopsisTypography}>
                  
                  </Typography>
                </SynopsisStyling>
              </TabPanel>

             </TabContext>
           </ThemeProvider>
       );
    };