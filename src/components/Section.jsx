// import images from "../constants/images";
import SubHeading from "./SubHeading";
import styles from "../constants/style";
const Section = ({title, content, image}) => {
    return (

        <div className="wrapper px-[2rem] lg:px-[12rem]">
            <div className="section flex flex-col items-center lg:flex-row pb-24 md:gap-[2rem] lg:gap-[7rem] justify-center">
                <div className="section__image flex lg:w-[25rem] h-[20rem] lg:h-auto">
                    <img src={image} alt="section" className="rounded-xl min-w-full object-cover"/>
                </div>
                <div className="section__content md:w-[45rem]">
                    <SubHeading title={title} />
                    <div className="text font-[400] text-[14px] leading-normal md:text-[18px] lg:leading-relaxed text-justify indent-12 font-OrkneyLight">{content}</div>
                    <div className="button flex justify-end pt-8">
                        <button className={`bg-[#383838] text-yellow font-OrkneyBold ${styles.sectionButton} hover:text-[#383838] hover:bg-yellow`} >Learn more</button>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
export default Section;