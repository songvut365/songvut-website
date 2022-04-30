import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

function Skill(props) {
  return (
    <div>
      {Array.from(props.skills).map((skill, index) => (
        <Accordion sx={{borderBottom: 0}} key={index} >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{skill.name}</Typography>
              </AccordionSummary>
              {/* Check skill type */}
              {skill.name !== "Language Proficiency" ? (
                <AccordionDetails 
                  sx={{
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    maxWidth: 1,  
                    gap: {xs: 1, md: 3, xl: 8},
                    justifyContent: {xs: 'space-around', lg: "center"}
                  }}
                >
                  {Array.from(skill.lists).map((list, index) => (
                      <Box  
                        key={index} 
                        sx={{
                          display: 'flex', 
                          mb: 1, 
                          alignItems: 'center', 
                          flexDirection: "column", 
                          gap: 1,
                          textAlign: 'center'}}
                      >
                        <Avatar 
                          src={list.image} 
                          variant="square" 
                          sx={{
                            width: 1,
                            minHeight: 70, 
                            maxHeight: 70
                          }}
                        />
                        <Typography variant="p" sx={{fontWeight: 500}}>{list.name}</Typography>
                      </Box>
                    ))}
                </AccordionDetails>
              ) : (
              // Language skills
                <AccordionDetails 
                  sx={{
                    display: 'flex', 
                    flexWrap: 'wrap',
                    justifyContent: { xs:  'space-around', xl: 'center'},
                  }}
                >
                  {Array.from(skill.lists).map((list, index) => (
                    <Box 
                      key={index}
                      sx={{
                        display: 'flex', 
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        gap: 1,
                        maxWidth: { xs: 0.5, sm: 0.3, xl: 200 },
                        minWidth: { xs: 0.5, sm: 0.3, xl: 200 },
                        mb: 2,
                      }}
                    >
                      <Avatar sx={{bgcolor: list.bgcolor, color: list.textcolor }} variant="square">{list.abb}</Avatar>
                      <Typography variant="p" sx={{fontWeight: 500}}>{list.name} : {list.detail}</Typography>
                    </Box>
                  ))}
                </AccordionDetails>
              )}
        </Accordion>
      ))}
    </div>
  )
}

export default Skill;