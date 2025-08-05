import airbnbLogo from '../../assets/airbnb.svg';
import amazonLogo from '../../assets/amazon.svg';
import facebookLogo from '../../assets/facebook.svg';
import googleLogo from '../../assets/google.svg';
import netflixLogo from '../../assets/netflix.svg';       
import grabLogo from '../../assets/grab.svg';
import './company.css';
import useIntersectionObserver from "../../hook/useIntersectionObserver";
function ComapanySection(){
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const companies = [
        {name: 'Google', logo: googleLogo},
        {name: 'Netflix', logo: netflixLogo},
        {name: 'Airbnb', logo: airbnbLogo},
        {name: 'Amazon', logo: amazonLogo},
        {name: 'Facebook', logo: facebookLogo},
        {name: 'Grab', logo: grabLogo},

    ];
    return (
        <section ref={ref} className={`company-section ${isVisible ? 'is-visible' : ''} animate-on-scroll`}>
            <h2 className='company-heading'>Trusted by 5000+ Companies Worldwide</h2>
            <div className="company-logos">
                {
                    companies.map((company, index) => (
                        <img 
                         key={index} 
                         src={company.logo} 
                         alt= {company.name} 
                         className='company-logo'
                         />
                    ))
                }
            </div>
        </section>
    );
}
export default ComapanySection;