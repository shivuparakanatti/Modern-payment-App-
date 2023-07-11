import React from "react";
import styles from "./style";
import  {Billings,Business,Button,CardDeal,Clients,CTA,FeedbackCard,Footer,Getstarted,Hero,Navbar,Stats,Testimonials} from './components/index'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          </div>
          </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero/>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billings />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
            
            
            
             
             
             
            
         
        </div>

      </div>
    </div>
  );
};

export default App;
