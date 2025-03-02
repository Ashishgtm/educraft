import React, { useLayoutEffect } from "react";
import { FaCircleNotch } from "react-icons/fa6";
import { gsap } from "gsap";

const ServiceSection = () => {
  useLayoutEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      ".aboutus-top",
      { x: "-100vw", opacity: 0 }, // Start from right
      { x: 0, opacity: 1, duration: 4, ease: "power3.out", delay: 1 },
      "-=1.3" // Overlapping animation
    );
  }, []);

  return (
    <div>
      <div className="aboutus-top">
        <FaCircleNotch className="iconaboutus" />
        Student Screening
      </div>
      <div className="about-paragraph">
        <p>
          The “student assistance team” of Educraft Abroad Studies is an experienced
          agency in background checks of Students eligibility for enrollment.
          Universities, colleges and education providers turn to us because of
          our safe, secure and customized screening procedure which is unique in
          the Nepalese Prospective student market. The goal of the Student
          Assistance Team is to offer additional support to kids who are having
          academic or behavioral issues and who are either performing below or
          above expectations. This prevents the students from benefiting from
          general education.
          <br /> A student must be referred to the student assistance team for
          consideration of interventions if universal screening, a
          recommendation from a parent, a staff member, or other information
          accessible to a public agency suggests that they need educational
          support for learning. We conduct background checks for academic,
          financial, study gap, career progression, immigration history and most
          importantly intention to study requirements, working closely with the
          students. Screenings can mirror the academic and financial potential
          of Nepalese students where our counselors are assigned to conduct the
          process. We offer an online link where students can follow our website
          and fill-in their information for assessment. If there is some
          problems regarding filling form then, don’t hesitate to contact us.
        </p>
      </div>

      <div className="aboutus-top">
        <FaCircleNotch className="iconaboutus" />
        University Application Assistance
      </div>
      <div className="about-paragraph">
        <p>
          {" "}
          Students’ lives depend on academic support. Due to a lack of
          information and support, many students are choosing an online platform
          for their academic demands, which puts them under academic stress. An
          application assistance team is available to you through Educraft Abroad Studies to help you complete the university admission
          process.
          <br />
          The University application assistance team of Educraft assist
          students to choose the level of degree he/she applies for, and direct
          them to correct form to fill in. It plays a vital role if the
          applicant is unsure which major they wish to study. The team provides
          entire support for enrollment, offer letters and the process of
          confirmation of enrollment. We are going to assist you all without
          charge in your efforts to enroll in universities.
          <br />
          Send your whole document package to us via email. Our application
          assistance team is in regular touch with universities and students as
          a liaison body. This team believes in prompt action to overcome
          complications during the entire admission process.
          <br />
          If you feel uneasy to contact us, then we’ve provided online enquiry
          on our website. You can freely fill enquiry form to know more about
          universities and courses.
        </p>
      </div>

      <div className="aboutus-top">
        <FaCircleNotch className="iconaboutus" />
        Documentation Guidance
      </div>
      <div className="about-paragraph">
        <p>
          EduCraft Document Department is designed to guidance documents for
          students prepare their own documents and comply with court procedural
          requirements. We provide a good grasp of the legal and practical rules
          and procedures, to prepare the documents for admission, confirmation
          of enrollment and Visa Application. We suggest which forms are
          appropriate for the circumstances. We also assist, as per the
          requirements, with the paperwork related to university and Visa
          authorities.
          <br />
          To study in Australia, most of Nepalese students get trouble to
          prepare documents for the reason that, Australian visa is the document
          type visa. Therefore, you should make your documents strong and fully
          qualified for that reason, EduCraft helps for guidance documents.
          <br />
          You’ll need a comprehensive list of the paperwork needed for study
          abroad. You can also explore more about documents for abroad study
          from here.
          <br />
          EduCraft takes the worry and anxiety out of “doing it themselves” in
          situations where there is a visa lodgment by the applicant. Our team
          acts as a helping hand and assists with paralegal suggestions to
          prepare the paperwork for the Application.
          <br />
        </p>
      </div>

      <div className="aboutus-top">
        <FaCircleNotch className="iconaboutus" />
        Interview Assistance
      </div>
      <div className="about-paragraph">
        <p>
          While interviews are not part of every university’s admission process,
          many institutions will ask students to meet online before accepting
          their application. The EduCraft Team assists students to prepare for
          the behavioral interview questions and answers to show their potential
          to study at the university. As interviews are scary at the best of
          times, our guidance gives them a better chance at successfully getting
          a place at an institution. It also prepares students to control their
          nerves before stepping into the interview with the admission team of
          the institution. This preparation also helps student for interview by
          DIBP.
          <br />
        </p>
      </div>

      <div className="aboutus-top">
        <FaCircleNotch className="iconaboutus" />
        Scholarship Assistance
      </div>
      <div className="about-paragraph">
        <p>
          The Scholarship Assistance Program works to inform students about the
          process of applying for private/outside scholarships and provided the
          facility with scholarships for students. Informing students about the
          process of applying and assists to choose the best scholarship given
          universities and also give updated info about universities. From the
          beginning phase of researching scholarships, to putting the
          application in the mail, we help to search scholarships for students
          in college with every step. Counselors from “The Next Education
          Consultancy” helps the student who are worthy with exceptional
          academic records to apply for university scholarships. The
          universities that works together we partner are constantly seeking to
          hire academically talented students and making generous scholarship
          offers.
          <br />
          Now a days, Australian government had provide many scholarships award
          for international and national students.
          <br />
          We Offer:
          <li>
            Search for scholarships that fit your academic interests and
            financial situation.
          </li>
          <li>
            Let you know about any university programs that give scholarships to
            only qualified candidates.
          </li>
          <li>
            complete updated information about national and international
            scholarship.
          </li>
          <li>
            Send your scholarship application to the attention of the academic
            institutions we partner with.
          </li>
          <br />
          Feel free to contact (01-4547987, +977-9862403580) or
          educraftabroadstudies@gmail.com If you need more information about how
          we help students receive scholarships or who we collaborate with. All
          of your questions regarding, “scholarships for students in college”
          will be answered by one of our helpful scholarship assistance.
        </p>
      </div>

      <div className="aboutus-top">
        <FaCircleNotch className="iconaboutus" />
        Student Visa Declaration Form
      </div>
      <div className="about-paragraph">
        <p>
          For convenience and in order to serve Australian Universities and
          Colleges better, The Next has formed its own Compliance Department.{" "}
          <br />
          The Department has designed its own:
          <br />
          <li>Student visa declaration form</li>
          <li>Compliance form</li>
          <li>Parent’s declaration form</li>
          <br />
          The department scrutinizes in every possible way while performing its
          tasks. Students’ academic records, IELTS score, work experience and
          financial documents are checked and verified methodically. Only after
          verification by the compliance team, students will get an opportunity
          to apply for GTE approval for fee payment to providers and apply for
          their VISA.
        </p>
      </div>

      <div className="aboutus-top">
        <FaCircleNotch className="iconaboutus" />
        Counseling
        </div>
      <div className="about-paragraph">
        <p>Career counseling is one of the important features belongs to The Next Education Consultancy.
             Beginning from three to ten and half years of familiarity in their respective fields, our 
             counselors listen to your words and make you peep through what you intend to be tomorrow.
              Feel free to visit us and discover the difference. Our experts are always there to help you.
               Come as you are, we make you stay smart on the walks of life.</p>
      </div>
    </div>
  );
};

export default ServiceSection;
