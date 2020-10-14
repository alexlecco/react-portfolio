import React, { useState, useEffect } from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import NavigatorMenu from "./NavigatorMenu";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfStructure from "../pdf/PdfStructure";
import database from "../firebase";

const Presentation = ({
  //flag,
  avatar,
  name,
  city,
  country,
  birthday,
  phone,
  email,
  profile,
  description,
  theme,
  changeTheme,
  scroller,
  social,
  claps,
  goals,
  studies,
  skills,
  languages,
  experience,
  mentoring,
}) => {
  const [labelsVisible, setLabelsVisible] = useState({
    theme: false,
    language: false,
    claps: false,
    resume: false,
  });
  const [language, setLanguage] = useState("english");
  const [localClaps, setLocalClaps] = useState(claps);

  const profileTextColor = theme === "Dark" ? "text-teal-400" : "text-orange-900";
  const changeThemeText = theme === "Dark" ? "light theme" : "dark theme";
  const languageText = language === "english" ? "a español" : "to english";
  const clapsText = `${claps} claps`;
  const getMyResumeText = "get my resume";

  useEffect(() => {
    const userRef = database.ref().child("data").child("claps");
    setTimeout(userRef.set(localClaps), 1000);
  }, [localClaps]);

  const toggleLabelsVisible = e => {
    switch (e.currentTarget.classList[1]) {
      case "theme":
        setLabelsVisible({ ...labelsVisible, theme: !labelsVisible.theme });
        break;
      case "language":
        setLabelsVisible({
          ...labelsVisible,
          language: !labelsVisible.language,
        });
        break;
      case "claps":
        setLabelsVisible({ ...labelsVisible, claps: !labelsVisible.claps });
        break;
      default:
        setLabelsVisible({ ...labelsVisible, resume: !labelsVisible.resume });
        break;
    }
  };

  const handleChangeLanguage = () => {
    setLanguage(language === "english" ? "spanish" : "english");
  };

  const incrementClaps = () => {
    setLocalClaps(claps + 1);
  };

  const userData = {
    name,
    city,
    country,
    birthday,
    phone,
    email,
    social,
    profile,
    goals,
    studies,
    skills,
    languages,
    experience,
    mentoring,
  };

  return (
    <div className='h-screen'>
      <div className={`${theme}-transparent flex justify-between`}>
        <div className='flex flex-row'>
          <div
            className='flex flex-col items-center p-8 w-20 h-20 md:mr-2'
            onClick={changeTheme}
          >
            <Brightness4Icon
              fontSize='small'
              className='theme cursor-pointer'
              onMouseEnter={toggleLabelsVisible}
              onMouseLeave={toggleLabelsVisible}
            />
            {labelsVisible.theme && (
              <p className='hidden md:inline noselect text-sm'>{changeThemeText}</p>
            )}
          </div>
          <div
            className='flex flex-col items-center p-6 mt-1 w-20 h-20'
            onClick={handleChangeLanguage}
          >
            <p
              className='cursor-pointer language noselect'
              onMouseEnter={toggleLabelsVisible}
              onMouseLeave={toggleLabelsVisible}
            >
              {language === "english" ? "EN" : "ES"}
            </p>
            {labelsVisible.language && <p className='text-sm'>{languageText}</p>}
          </div>
        </div>
        <div className='flex flex-row'>
          <div
            className='flex flex-col items-center p-6 w-24 h-20 md:mr-2'
            onClick={incrementClaps}
          >
            <img
              src='https://www.iconfinder.com/data/icons/celebration-and-party-8/96/clap-512.png'
              alt='clap'
              className={`cursor-pointer claps clap-img ${
                theme === "Dark" ? "filter-inverse" : null
              }`}
              onMouseEnter={toggleLabelsVisible}
              onMouseLeave={toggleLabelsVisible}
            />
            {labelsVisible.claps && (
              <p className='flex-row hidden md:inline noselect text-sm'>
                {clapsText}
              </p>
            )}
          </div>
          <div
            className='p-8 w-20 h-20'
            onMouseEnter={toggleLabelsVisible}
            onMouseLeave={toggleLabelsVisible}
          >
            <PDFDownloadLink
              document={<PdfStructure data={userData} />}
              fileName='alex-resume.pdf'
              className='flex flex-col items-center'
            >
              <GetAppIcon fontSize='small' className='resume cursor-pointer' />
              {labelsVisible.resume && (
                <p className='hidden md:inline noselect text-sm'>
                  {getMyResumeText}
                </p>
              )}
            </PDFDownloadLink>
          </div>
        </div>
      </div>
      <div className='md:flex p-6 md:p-6'>
        <div className='flex justify-center md:justify-end md:w-1/2 md:mx-20'>
          <img
            className='w-32 md:w-64 rounded-full mx-auto md:mx-0 items-center'
            src={avatar}
            alt='avatar'
          />
        </div>
        <div className='md:w-1/2 md:flex md:flex-col md:justify-center md:items-start'>
          <div className='flex flex-row justify-center align-middle pb-3'>
            {/*<img src={flag} className="presentation-flag" alt="flag" />*/}
            <h2 className={`text-3xl ${theme}-transparent`}>{name}</h2>
          </div>
          <div className={`text-lg ${profileTextColor} mb-4`}>{profile}</div>
          <div className='flex justify-center align-center'>
            {social &&
              social.map(socNetwork => (
                // eslint-disable-next-line react/jsx-no-target-blank
                <a href={socNetwork.url} target='_blank' key={socNetwork.name}>
                  <img
                    src={socNetwork.icon}
                    className='w-16 px-2'
                    alt={socNetwork.name}
                  />
                </a>
              ))}
          </div>
          <h3 className='text-sm font-hairline md:text-lg md:w-3/4'>
            {description}
          </h3>
        </div>
      </div>
      <NavigatorMenu theme={theme} scroller={scroller} />
    </div>
  );
};

export default Presentation;
