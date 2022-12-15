import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from "../styles/FAQ.module.css";
import TheNav from '../components/TheNav'
import Footer from '../components/Footer'
import Image from 'next/image';

const FAQ = () => {
    return (
        <div>
            <TheNav />
            <div className={style.FAQarea}>
                <div className={style.FAQimage}>
                    <Image src={'/faq.jpg'} width={550} height={350} alt="faq" className={style.Image} />
                </div>
                <div className={style.FAQ}>
                    <div className={style.head}>
                        <h1 className={style.H}>Frequently Asked Questions (FAQ)</h1>
                        <p className={style.P}>Our methodical approach is focused on revealing the essence of problem solving. Explore Frequently Asked Question and Answers for your business solutions.</p>
                    </div>
                    <div className={style.Accordion}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography><b>Is My Data Secure with WeldX Analysis Team?</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    As a leading data analysis and machine learning solution provider, the WeldX
                                    maintain the strict privacy policy for business and data analysis, and never
                                    compromise on its client business data security. We take prior approval from
                                    the Clients while reviewing and analysing the business data and take care of
                                    the business planning and insights.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography><b>What Other Services WeldX Offer for my Business Growth and Expansion?</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    As a leading digital transformation company in India, the WeldX offers a wide
                                    range of services for your business solutions including software products
                                    development, web application development, Android and iOS App
                                    development and other digital transformation solutions based on the new
                                    range of technologies. Let your business reach your targeted audience with the
                                    next level digital transformation solutions from WeldX, your one stop digital
                                    transformation solution for the business.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography><b>What Contract Process WeldX follow on Projects Assignments and
                                    Deliverable Time?</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The WeldX always believe in transparency for all project contracts and work on
                                    the assigned projects with the timely delivery. On approval of the Clients, the
                                    WeldX team will analyse and work with business requirements and follow the
                                    policy of organization to take and deliver the projects on time. For more details
                                    about our project contracts, please get in touch with our business expert team
                                    and they will assist you asap.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography><b>How Can I Process Payment to WeldX?</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The WeldX receive the Payment with various Payment gateways including
                                    Bank Details, Bank Cheque, PayPal, Razorpay etc. For the projects contracts,
                                    we follow the best transparency policy as per the global standards, and provide
                                    the Invoice details to clients.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography><b>Where is WeldX Located and What About It’s Global Presence?</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The WeldX is primarily located in Bhubaneswar, India and have global client
                                    presence for its wide range of IT services. Let’s talk about your IT projects
                                    today and work together for your business success.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography><b>Is There Any Refund Policy from WeldX?</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The WeldX often committed to work on your IT projects and deliver it on right
                                    time with all aspects. However, the WeldX is not offering any Refund Policy for
                                    its IT services.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FAQ