import { useRef, useEffect } from "react";

import styles from "./Home.module.css";
import Footer from "../components/Footer";
import image from "../assets/image.png";

const Home = () => {
  const content1Ref = useRef();
  const path1Ref = useRef();
  let path1Length;
  const content2Ref = useRef();
  const path2Ref = useRef();
  let path2Length;

  const calcDashoffset = (scrollY, element, length) => {
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
    const value = length - length * ratio;

    console.log(ratio);

    return value < 0 ? 0 : value > length ? length : value;
  };

  const scrollHandler = () => {
    path1Ref.current.style.strokeDashoffset = calcDashoffset(
      window.scrollY + window.innerHeight * 0.8,
      content1Ref.current,
      path1Length
    );

    path2Ref.current.style.strokeDashoffset = calcDashoffset(
      window.scrollY + window.innerHeight,
      content2Ref.current,
      path2Length
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    if (path1Ref.current) path1Length = path1Ref.current.getTotalLength();
    if (path2Ref.current) path2Length = path2Ref.current.getTotalLength();

    path1Ref.current.style.strokeDasharray = path1Length;
    path1Ref.current.style.strokeDashoffset = calcDashoffset(
      window.innerHeight * 0.8,
      content1Ref.current,
      path1Length
    );

    path2Ref.current.style.strokeDasharray = path2Length;
    path2Ref.current.style.strokeDashoffset = calcDashoffset(
      window.innerHeight,
      content2Ref.current,
      path2Length
    );
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="mb-24 md:pt-48">
        <div className="relative ml-4">
          <div className="relative header top-12 left-4 mt-4 max-w-7xl md:absolute md:top-0">
            <div className="w-1/3 md:w-5/12 md:-translate-y-1/4">
              <h1 className="font-bold text-3xl mb-4">동또농</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                libero porro natus, omnis tenetur molestiae quibusdam, expedita
                sint tempore nostrum fugiat recusandae aliquid maxime in
                inventore voluptatem voluptatibus sunt. Sapiente.
              </p>
            </div>
          </div>
        </div>
        <svg
          className="fill-none md:-translate-y-1/4"
          viewBox="0 0 310.38 136.09"
        >
          <path
            className={styles.path}
            d="m.16,111.51c7.72,2.54,14.17,4.54,19,6,4.24,1.28,7.15,2.13,11,3,2.87.65,6.76,1.54,11,2,1.87.2,9.86.99,20-1,1.88-.37,4.81-1.03,20-7,14.34-5.64,14.02-5.95,20-8,6.17-2.11,13.76-4.66,24-6,5.56-.73,15.18-1.52,27,0,9.45,1.22,16.47,3.54,24,6,6.57,2.14,11.7,4.24,16,6,2.47,1.01,5.13,2.14,18,8,11.92,5.43,16.13,7.42,23,10,8.6,3.23,3.17.54,14,4,1.81.58,4.05,1.32,7,1,1.2-.13,4.5-.49,7-3,2.09-2.1,2.47-4.54,3-8,0,0,.96-6.24-2-12-.11-.22-.41-.79-1-1-.4-.14-.76-.06-1,0-2.69.61-3.06.31-4,1-.52.38-.84.8-1,1-.69.9-.59,1.36-1,2-.92,1.43-2.55.91-3,2-.27.66.15,1.44,1,3,.6,1.1,1.05,1.65,2,3,1.1,1.57,1.66,2.36,2,3,.74,1.38,1.26,2.87,2,5,.44,1.26.66,2,1,2,.26,0,.46-.45,1-2,.61-1.74.91-2.6,1-3,.34-1.53.26-2.77,0-5-.35-3.08-.74-5.45-1-7-.65-3.85-1.12-4.62-1.09-5.43,0-.07.06-.28.09-.57.04-.37,0-.55,0-1-.02-.89.07-.83,0-1-.21-.53-.79-.47-1-1-.16-.4-.05-.78,0-1,.21-.95-.19-1.96-1-4-.26-.66-.67-1.6-1-3-.13-.54-.16-.82,0-1,.43-.47,2.08-.03,3,1,.38.43.2.47,1,2,.68,1.3.67,1.26,1,2,.45,1.01.7,2.04,1,3,.59,1.89.81,1.85,1,3,.13.83.21,1.36,0,2-.31.93-1.12,1.69-2,2-.77.27-.86,0-3,0-1.21,0-1.34.15-2,0-.89-.19-1.5-.63-2-1-1.15-.84-.94-1.12-2-2-.94-.78-1.35-.76-3-2-.86-.64-.96-.81-1-1-.19-.89,1.14-1.29,2-3,.75-1.49.18-2.05,1-3,.7-.8,1.97-1.4,3-1,.08.03.9.36,1,1,.13.84-1.03,1.71-2,2-.19.06-.76.21-2,0-1.29-.22-2.22-.63-3-1-2.01-.94-3.55-1.76-4-2-1.87-.98-2.82-1.48-4-2-2.64-1.16-4.82-1.71-6-2-.51-.13-2.83-.69-6-1-.61-.06-4.91-.48-5,0-.03.17.49.39,2,1,2.92,1.18,4.38,1.77,5,2,2.47.92,3.71,1.38,5,2,2.39,1.15,2.35,1.67,6,4,2.82,1.8,2.77,1.47,5,3,3.17,2.18,2.17,2.08,5,4,1.16.78,2.03,1.27,2,2-.03.74-.96,1.34-2,2-.75.48-1.34.86-2,1-1.75.38-3.15-1.04-6-3,0,0-2.23-1.52-5-3-.57-.3-3.22-1.7-7-3-2.96-1.02-2.66-.61-7-2-4.71-1.5-4.14-1.68-6-2-1.43-.24-2.34-.24-3-1-.82-.95-1.02-2.79,0-4,1.02-1.21,2.66-1.04,3-1,.14.01,2.13.26,3,2,.45.91.7,2.43,0,3-.61.5-1.75,0-4-1-2.64-1.18-3.96-1.77-5-3-.86-1.01-1.14-1.88-2-2-.73-.1-1.68.27-2,1-.14.32-.22.84,0,1,.28.2.84-.32,2-1,.98-.57,1.44-.71,2-1,1.67-.87,2.79-2.37,4-4,1.44-1.94,2.32-3.66,3-5,.52-1.03.95-1.99,2-4,.35-.67-.1.21,2-3,.41-.62.66-1.02,1-1,.54.03,1.02,1.09,1,2-.01.65-.29,1.59-1,2-1.58.91-4.3-1.41-5-2-1.92-1.63-2.78-3.5-3-4-.89-2.04-.94-3.89-1-6-.02-.76-.03-2.39,0-4,.03-1.51.06-1.59,0-2-.14-.99-.47-1.56-2-4-1.81-2.89-2.18-3.41-3-4-.4-.29-1.06-.75-2-1-1.27-.34-2.51-.09-5,1-1.37.6-3.69,1.71-7,4-3.01,2.08-3.68,2.96-4,4-.34,1.11-.19,2.07,0,3,1.02,5.07,3,9,3,9,2.25,4.02,3.87,6.94,5,9,.94,1.7,2.09,3.28,3,5,1.11,2.1,1.59,3.35,3,4,.28.13,1.84.84,3,0,.8-.58.95-1.59,1-2,.24-1.91-.88-3.51-2-5-2.25-2.98-4.19-5.11-5-6-4.66-5.12-5.49-6.27-6-7-1.65-2.4-1.03-2.07-3-5-1.35-2.01-2.58-3.55-3-6-.14-.8-.19-1.32,0-2,.49-1.76,2.23-2.65,5-4,2.44-1.19,4.64-1.89,5-2,3.17-.99,4.62-.97,5-2,.1-.28.1-.56-1-3-.98-2.16-1.46-3.24-2-4-1.06-1.49-2.09-2.29-3-3-.95-.74-1.59-1.22-2-1-.58.31-.45,1.88,0,3,.69,1.72,2.24,2.58,3,3,.26.14,1.4.8,3,1,.51.07.77.1,1,0,1.25-.53,1.09-3.46,1-5-.04-.75-.19-2.57-1-5-.56-1.67-1.59-4.11-2-4-.4.11-.07,2.48,0,3,.27,1.94.78,2.71,1,3,.04.05.04.04,1,1,.93.93.93.97,1,1,.22.11,3.9-2.17,6-7,.82-1.9.97-3.2,1-4,.06-1.76-.35-3.93-1-4-.28-.03-.52.32-1,1-.62.88-.84,1.61-1,2-.46,1.12-1.56,2.56-3,3-1.67.51-3.28-.54-4-1-.55-.35-1.35-.98-2-2-.21-.33-.81-1.35-1-3-.31-2.73.97-3.25,1-6,.03-2.14-.74-2.02-1-5-.25-2.94.34-4.92,0-5-.25-.06-.87.93-1,2-.13,1.08.34,1.48,0,2-.32.49-.83.29-2,1-.56.34-.99.61-1,1,0,.39.74.4,1,1,.15.34.07.68,0,1-.22.94-.81,1.12-1,2-.03.13-.1.54,0,1,.29,1.28,1.71,1.88,2,2,.33.14,1.9.8,3,0,.19-.14.68-.54,1-2,.33-1.49.13-2.46,0-4-.14-1.62-.27-3.2,0-5,.29-1.9.7-1.92,1-4,.19-1.29.37-2.54,0-4-.44-1.77-1.75-4.13-3-4-1.11.11-1.74,2.14-2,3-.23.74-.72,2.36,0,4,.5,1.13,1.55,2.2,2,2,.37-.16.23-1.1,0-3-.76-6.33-.59-7.33,0-8,.73-.83,1.85-.91,3-1,1.6-.12,2,.6,6,2,.42.15,1.28.43,3,1,2.3.76,2.48.8,3,1,1.9.72,2.33,1.83,4,2,.18.02.45.01,1,0,3.13-.07,4.02-.64,5,0,.56.37.41.65,1,1,1.18.7,2.72.11,3,0,1.16-.45,1.69-1.21,2-1,.21.14.2.65,0,1-.48.86-1.95.63-2,1-.04.3.92.81,2,1,1.65.29,2.87-.29,3,0,.09.2-.4.7-1,1-1.77.9-3.95-.15-4,0-.03.1.99.43,2,1,1.67.94,3.26,2.49,3,3-.21.42-1.62.09-2,0-2.48-.58-3.78-2.21-4-2-.2.19.57,1.89,2,3,.37.29.74.5,1,1,.42.79.35,1.87,0,2-.31.11-.62-.6-2-2-.81-.83-1.74-1.63-3-2-.59-.17-.84-.13-1,0-.34.28-.14.93,0,2,.18,1.34.22,2.95,0,3-.07.02-.19-.13-1-2-.67-1.54-.71-1.72-1-2-.73-.72-1.31-.4-2-1-.95-.82-.36-1.88-1-3-1.14-2-4.94-2-6-2-2.25,0-3.16.65-5,0-.44-.15-.96-.44-2-1-1.73-.94-2.59-1.4-3-2-1-1.46-.68-3.79,0-4,.6-.19,1.58,1.25,2,2,.28.49,1.01,1.94,1,6,0,2.9-.39,3.28,0,5,.26,1.16.46,1.09,1,3,.76,2.69.38,2.86,1,4,.78,1.42,1.58,1.52,2,3,.24.84.29,1.89,0,2-.24.09-.74-.45-1-1-.5-1.06-.03-2.08,1-5,1.06-2.99,1.11-3.43,1-4-.34-1.77-1.87-2.91-2-3-1.04-.75-2.03-.83-2-1,.04-.23,1.74-.12,4,0,5.26.28,6.06.22,7,1,.19.16.79,1.11,2,3,1.45,2.28,1.5,2.5,2,3,1.47,1.47,3.32,1.86,4,2,.78.16,3.55.7,6-1,2.19-1.52,2.74-3.87,3-5,.28-1.22.72-4.16-1-7-.35-.57-1.24-2.02-3-3-2.95-1.64-5.93-.59-6-1-.06-.38,2.47-1.71,5-1,1.31.37,2.11,1.15,3,2,.77.74,2.39,2.35,3,5,.19.84.51,2.29,0,4-.65,2.19-2.22,3.4-3,4-1.7,1.31-3.33,1.65-5,2-1.75.37-2.9.59-4,0-1.04-.56-.82-1.19-2-2-1.15-.78-2.37-.87-4-1-.99-.08-.83.03-3,0-2.15-.03-2.36-.14-3,0-1.71.38-2.77,1.71-3,2-2.12,2.65-1.16,6.41-1,7,.71,2.61,2.04,2.95,2,5-.03,1.46-.74,3.06-2,4-2.45,1.83-6.1.46-8-1-.51-.39-2.86-2.3-3-5-.06-1.13.29-1.82,0-2-.63-.38-3.2,2.28-5,5-3.05,4.6-3.79,9.14-4,11-.29,2.53-.13,4.46,0,6,.22,2.65.47,5.6,2,9,1.57,3.49,3.68,5.66,5,7,2.18,2.21,3.95,3.23,7,5,1.73,1,2.37,1.22,3,1,1.82-.65,1.93-4.48,2-7,.05-1.77.13-4.61-1-5-.81-.28-1.86.85-2,1-1.83,1.98-1.19,5.2-1,6,.4,1.71,1.22,3.01,5,7,3.6,3.81,4.33,3.52,6,6,1.68,2.5,2.81,5.48,3,6,.63,1.68,1.49,3.28,2,5,.12.42.34,1.22,1,2,.56.66,1.06.86,1,1-.12.29-2.69,0-3-1-.4-1.29,3.03-3.4,4-4,4.69-2.89,7.77-2.77,15-5,3.66-1.13,5.54-1.71,8-3,5.56-2.91,8.92-6.72,10-8,1.85-2.21,6.09-7.27,7-15,.27-2.29.89-10.32-4-16-.64-.75-3.15-3.65-5-3-1.8.63-1.97,4.25-2,5-.1,2.08.24,6.12,5,12,7.44,9.19,17.2,12.43,19,13,5.95,1.89,10.98,1.94,16,2,4.99.06,8.71.28,13-1,2.14-.64,3.84-1.41,5-2"
          />
        </svg>
      </div>

      <div className={`${styles.content1} relative`} ref={content1Ref}>
        <img
          className="grayscale -scale-x-100 w-full h-full absolute -z-10"
          src={image}
          alt=""
        />
        <svg
          className={`${styles.svg1} fill-none stroke-white stroke-2 absolute`}
          viewBox="0 0 752.37 615.05"
        >
          <g>
            <path
              className={styles.path1}
              ref={path1Ref}
              d="m121.52,103.02c-11.39-3.66-21.05-4.86-27.75-5.25-5.97-.35-13.51-.29-21.75,3-3.15,1.26-6.82,2.72-6.75,4.5.12,3.29,13.02,6.49,24.75,6.75,17.18.38,25.37-5.68,29.25-1.5,2.76,2.97.18,7.71-3,20.25-5.75,22.65-5.78,40.49-9,40.5-1.94,0-2.58-6.44-6-6.75-3-.27-4.24,4.55-7.5,4.5-3.88-.06-4.72-6.92-9-7.5-4.38-.6-7.13,6.09-9.75,5.25-2.54-.81-2.02-7.73-2.25-17.25-.39-15.91-.77-26.51-6.75-30.75-2.84-2.01-5.9-1.86-11.25-1.5-32.71,2.23-45.02,5.5-49.5,0-2.24-2.75-1.44-6.37-.75-11.25.27-1.89-.32-17.26-1.5-48C1.66,22.61-2.95,7.61,5.27,2.52c2.05-1.27,4.1-1.43,5.25-1.5C52.3-1.66,181.92,7.07,193.52,3.27c.54-.18,3.29-1.19,4.5,0,1.6,1.57-.45,6.03-.75,6.75,0,0-3.71,8.9-3,106.5,0,0-3.63,2.18-3.75,2.25-3.59,2.14-38.11-1.84-43.5,0-.22.07-1,.37-1.5,0-1.07-.78-.18-4.08.75-6,2.8-5.81,10.02-7.72,12-8.25,5.1-1.35,9.31-.88,10.5-.75,12.87,1.39,6.32-1.26,36,.75,21.43,1.45,27.84,3.03,33.75,5.25,8.85,3.32,11.94,6.31,13.5,9.75,2.23,4.92,2.07,12.41-3,17.25-5.01,4.78-12.42,4.69-17.25,2.25-8.51-4.31-12.06-17.5-6-26.25,6.47-9.34,20.53-6.54,23.25-6,2.77.56,10.33,2.07,12.75,7.5,1.12,2.52.34,4.08,0,12-.28,6.55.19,7.25,0,11.25-.42,8.91-3.04,12.36-5.25,21-3.75,14.65-4.37,18.3-2.25,21,1.19,1.52,3.01,2.55,3.75,5.25.83,3.01-.34,5.71-.75,6.75-2.65,6.74-2.71,18.17,0,24.75,2.79,6.77,6.95,4.64,16.5,15.75,5.3,6.16,10.15,13.95,9,15-.87.8-5.01-2.41-6.75-3.75-3.75-2.9-12.31-9.53-15-20.25-.28-1.1-.18-5.48,0-14.25.45-21.55,1.98-25.35.75-29.25-.12-.39-.57-1.73,0-3,.89-1.98,4.01-3.26,5.25-2.25,1.17.95.8,4.06-.75,5.25-2.3,1.77-8.04,0-9-3.75-.82-3.19,2.16-6.58,5.25-7.5,3.76-1.12,7.35,1.54,9,3.75,1.79,2.4,1.37,4.37,2.25,9,.71,3.74,1.72,6.24,3.75,11.25,3.27,8.08,7.44,14.01,9.75,17.25,4.87,6.84,6.99,7.96,8.25,12.75,1.15,4.38,1.05,9.86-.75,10.5-.73.26-2.18-.11-7.5-7.5-5.13-7.11-8.19-11.37-11.25-18.75-5.35-12.91-5.37-22.6-6.75-22.5-.98.07-1.59,5.03-1.5,9,.1,4.38,1.05,6.81,3.75,15.75,3.22,10.65,2.84,10.41,3.75,12,1.23,2.16,2.92,4.35,12,11.25,9.1,6.92,13.65,10.37,16.5,10.5,5.06.22,5.07-2.75,17.25-6,4.34-1.16,6.01-1.23,7.5-3,3-3.55,1.99-10.04-.75-14.25-.36-.55-4.39-6.59-9-6-3.69.47-4.41,4.76-9,5.25-2.58.27-4.82-.82-5.25,0-.42.79,1.62,1.91,1.5,3.75-.11,1.75-2.04,2.12-3,3.75-2.06,3.48,2.1,9.59,3.75,12,4.21,6.18,6.13,5.4,9,9.75,5.53,8.39,3.32,18.82,3,20.25-1.31,5.77-3.19,5.04-6,13.5-1.85,5.57-3.69,11.37-1.5,17.25,1.57,4.21,5.07,8.1,6.75,7.5,1.79-.64.18-5.87,1.5-13.5,1.2-6.93,3.47-8.06,6-15,1.27-3.49,7.15-19.63,0-27.75-3.8-4.33-11.12-6.18-14.25-3.75-1.03.8-1.17,1.72-2.25,6-2.94,11.68-3.91,12.9-4.5,13.5-3.11,3.15-9.42,4-12.75,1.5-4.58-3.44-2.23-12.26-4.5-12.75-1.8-.39-4.37,4.9-5.25,6.75-2.78,5.82-3.24,9.57-5.25,19.5,0,0-1.68,8.27-3,19.5-.34,2.89-.57,5.23.75,7.5,2.07,3.56,5.5,2.72,9.75,6,4.06,3.13,7.62,9.05,6.75,14.25-.79,4.7-4.52,4.68-5.25,9.75-.52,3.62,1.28,4.33,2.25,11.25.89,6.38-.46,7,.75,9,2.08,3.43,6.82,2.81,22.5,3.75,10.83.65,14.66,1.31,15.75-.75,1.22-2.3-2.75-4.64-4.5-11.25-1.59-6,.75-7.62.75-16.5,0-6.03,0-15.5-5.25-18.75-2.66-1.65-4.06-.07-12.75,0-6.07.05-6.15-.71-17.25-1.5-13.26-.95-15.29-.01-16.5.75-3.82,2.41-3.08,5.44-6.75,13.5-6.63,14.56-15.05,17.87-13.5,25.5.1.49,1.05,4.84,4.5,6.75,3.64,2.02,6.57-.6,15-.75,4.67-.09,8.38-.15,11.25,2.25,2.19,1.84,1.87,3.97,3.75,10.5.23.8,1.4,4.03,3.75,10.5,6.42,17.7,8.56,19.46,8.25,25.5-.18,3.5-1.29,10.51-4.5,11.25-3.68.85-6.12-7.5-15-17.25-12.86-14.13-23.44-13.86-25.5-24-.94-4.63-.07-11.25,4.5-14.25,5.09-3.34,13.24-1.19,15.75,3,1.79,2.99-.08,5.73,2.25,8.25,2.12,2.28,4.69,1.14,7.5,3,3.41,2.25,3.84,6.72,4.5,10.5.73,4.17,3.86,21.98,14.25,28.5,4.01,2.51,9.58,3.65,10.5,2.25,1.04-1.58-3.23-7.31-6-6.75-2.9.58-2.04,7.6-6.75,9.75-2.36,1.07-4.34.12-5.25,1.5-.96,1.46.67,3.39,1.5,6,2.59,8.16-5.18,15.12-2.25,18.75,1.42,1.76,4.36,1.51,4.5,1.5,4.41-.43,7-6,15.75-23.25,3.79-7.47,4.71-9.2,6.75-9.75,6.8-1.82,14,15.41,17.25,14.25,3.83-1.36.89-20.15-3-31.5-.47-1.38-.91-2.5-1.5-3.75-4.07-8.6-10.19-7.78-13.5-15-1.62-3.54-2.97-6.48-2.25-9.75.21-.94.66-2.24,0-3-.9-1.03-3.19-.32-4.5,0-7.94,1.95-11.83-2.49-15,0-2.9,2.28-2.5,8.21-.75,12,2.47,5.35,8.7,8.8,10.5,7.5,1.02-.73.92-3.22,0-3.75-1.31-.75-5.15,1.89-5.25,4.5-.08,2.26,2.67,3.91,4.5,5.25,3,2.2,5.75,6.72,11.25,15.75,9.2,15.11,4.75,17.26,14.25,36,2.69,5.31,5.31,9.59,3.75,14.25-1.76,5.24-7.95,8.4-9,7.5-.84-.72,2.11-3.54,3-9.75.71-4.94-.71-6.27.75-8.25,2.28-3.1,6.77-1.25,9-4.5,1.66-2.43-.05-4.62,1.5-6,2.55-2.26,10.52.69,11.25,4.5.35,1.83-1.24,2.43-1.5,6-.2,2.82.7,3.74,0,5.25-1,2.15-3.94,2.65-5.25,3-6.73,1.8-12.35,10.09-12,13.5.7,6.71,26.57,12.33,52.88,10.88,36.53-2.02,83.53-18.24,84-38.25.25-10.55-9.51-22.07-19.5-23.25-16.43-1.94-36.68,23.63-32.25,39,5.65,19.58,53.16,28.83,92.25,21,41.89-8.39,50.64-31.68,82.5-33,32.27-1.34,56.51,21.25,80.25,42.75,44.2,40.03,66.5,88.51,78,125.25"
            />
          </g>
        </svg>
        <svg className="invisible" viewBox="0 0 752.37 615.05"></svg>
      </div>

      <div className={`${styles.content1} w-screen relative`} ref={content2Ref}>
        <div className={`${styles.practice} absolute w-2/3 sm:w-5/12 md:w-1/3`}>
          <h2 className="text-xl font-bold">연습 모드</h2>
          <div className="border-t-2 w-16 border-black my-1 md:my-2"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            libero porro natus, omnis tenetur molestiae quibusdam,
          </p>
        </div>

        <div
          className={`${styles.two_bound} absolute w-2/3 sm:w-5/12 md:w-1/3`}
        >
          <h2 className="text-xl font-bold">연습 모드</h2>
          <div className="border-t-2 w-16 border-black my-1 md:my-2"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            libero porro natus, omnis tenetur molestiae quibusdam,
          </p>
        </div>

        <div className={`${styles.contest} absolute w-2/3 sm:w-5/12 md:w-1/3`}>
          <h2 className="text-xl font-bold">연습 모드</h2>
          <div className="border-t-2 w-16 border-black my-1 md:my-2"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            libero porro natus, omnis tenetur molestiae quibusdam,
          </p>
        </div>

        <svg
          className={`${styles.svg2} fill-none relative stroke-black stroke-1`}
          viewBox="0 0 394.2 663.06"
        >
          <g>
            <path
              className={styles.path2}
              ref={path2Ref}
              d="m384.7.18c2.5,6.62,16.69,45.53-.44,62.46-5.22,5.16-16.09,10.99-19.49,7.98-2.94-2.6-.95-11.71,2.21-12.4,5.41-1.18,41.44,38.32,19.94,43.42-16.83,3.99,9.24,20.04,6.57,27.99-2.49,7.45-10.56,11.53-17.99,8.96-4.05-1.4-16.02.1-16.7.88-1.17,1.34.6,3.74,1.68,11.44.74,5.3.07,5.37.67,9.42.71,4.79,1.78,5.65,5.72,16.16,3,8,3.66,10.91,4.04,13.13,1.03,5.96,1.68,9.67-.67,12.12-2.86,2.99-9.06,2.96-12.12,0-1.52-1.48-1.8-3.79-2.36-8.42-.51-4.27-1.13-9.38,1.01-10.44.87-.43,1.28.49,3.37.67,3.48.31,5.57-1.86,6.4-1.01.48.49.25,1.69-.34,2.36-.25.28-1.02,1-5.05.34-3.68-.6-5.56-.91-6.4-2.36-.68-1.18-.15-2.21.34-4.71.42-2.21.11-1.95.34-10.44,0,0,.09-3.47.34-8.75.7-15.12,1.9-17.09,0-19.52-1.3-1.67-4.59-2.37-11.11-3.7-11.43-2.34-12.24-.71-17.17-3.03-2.66-1.25-7.18-3.98-11.44-7.4-2.42-1.95-3.36-3-5.39-3.37-3.61-.66-5.17,1.85-9.42,1.35-.61-.07-4.49-.53-5.72-3.03-.87-1.74.05-3.48,1.68-7.4,3.28-7.9,4.92-11.84,4.71-15.15-.22-3.64-1.67-4.41-1.35-8.42.23-2.82,1.14-4.84,2.02-6.73,6.62-14.28,6.78-14.89,7.07-14.81.69.2.37,3.39.34,3.7-.15,1.47-.55,2.51-1.01,3.7-1.41,3.6-2.11,5.4-3.03,7.07-1.54,2.78-2.68,4.82-4.04,4.71-.15-.01-.61-.07-1.68-1.35-1.69-2-2.27-4.16-3.37-8.42-.12-.47-.3-1.22,0-2.02.42-1.1,1.62-1.93,2.02-1.68.36.22.3,1.47-.34,2.02-.65.57-1.83.37-4.38-.67-3.28-1.34-5.61-2.76-6.06-3.03-3.45-2.09-2.55-1.22-8.08-4.38-5.29-3.01-5.57-3.49-8.42-5.05-1.22-.67-6.06-3.14-11.44-4.71-.58-.17-2.64-.76-5.39-1.68-1.83-.62-2.74-.92-3.7-1.35-2.3-1.01-2.46-1.47-5.39-3.03-2.3-1.22-3.44-1.83-5.05-2.36-2.46-.8-3.44-.64-4.38-1.68-1.26-1.4-1.22-3.64-1.01-3.7.22-.06.96,1.89,1.01,2.02.88,2.3.62,3.38,1.01,5.05.49,2.11,1.28,2.01,3.37,5.72.16.3,1.36,2.43,2.36,5.05,1.16,3.02,1.57,5.4,2.02,8.08,1.05,6.26,1.55,9.46,0,12.79-.69,1.49-1.08,2.49-2.02,3.03-2.16,1.24-5.06-.32-5.72-.67-1.66-.89-2.9-2.18-5.39-6.4-2.5-4.23-3.75-6.34-4.38-8.42-2.12-7.02-.31-13.48,0-13.46.22.01-.28,3.54.67,8.75.48,2.62,1.15,6.16,3.37,10.1,1.87,3.31,4.22,5.83,5.39,7.07.2.21,1.47.66,1.68,1.68.06.29.01.61,0,.67,0,0-.11.73-.67,1.35-.7.77-3.34.71-6.73-.67-3.48-1.42-5.71-3.39-6.06-3.7-5.6-5.03-7.28-11.3-7.74-11.11-.29.12.34,2.7,1.35,5.05.79,1.84,2.17,5,5.39,7.74,4.27,3.64,9.01,4.19,10.77,4.38,1.77.18,5.54.52,9.76-1.35,6.39-2.83,8.92-8.56,9.42-9.76,3.11-7.46.14-14.12-.34-15.15-.67-1.43-2.92-5.87-7.74-8.42-3.15-1.66-7.35-2.49-7.74-1.68-.14.28.27.58.67,1.35,1.26,2.43.54,6.05-.67,6.4-.85.25-2.2-1.03-2.69-2.36-.47-1.25.12-1.77-.34-2.69-.74-1.49-3.21-2.01-5.05-1.68-.31.05-2.48.47-3.7,2.36-1.04,1.61-.65,3.14-.67,5.39-.07,6.56-1.08,7.44-1.68,7.74-.54.27-1.21.24-1.68,0-1.11-.56-1.29-2.33-1.35-4.38-.11-3.6.1-9.44.67-9.42.46.01.92,3.7.67,7.07-.3,4.07-1.76,9.15-3.03,9.09-1.17-.05-2.19-4.45-1.68-8.08.04-.3.34-2.37.67-2.36.39.01.88,2.87.34,5.72-.18.98-.77,3.4-1.35,3.37-.73-.04-1.2-3.93-1.01-7.07.09-1.45.2-2.98,1.01-4.71.68-1.44,1.15-1.56,2.36-3.37,1.03-1.54.92-1.8,2.69-5.39,1.37-2.78,2.08-4.19,3.03-5.39,1.03-1.29,2.15-2.66,4.04-3.37,1.29-.48,2.37-.44,4.04-.34,3.68.23,5.52.34,8.08.67,5.74.74,5.92.11,9.42.67,1.03.16,5.42,1.03,10.44,3.7,4.14,2.21,4.51,3.42,7.74,5.39,3.28,1.99,4.88,1.94,14.14,4.04,0,0,6.81,1.55,19.86,5.72,2.52.81,5.74,1.87,8.75,4.71,1.17,1.1,3.16,3.03,4.04,6.06.75,2.61-.09,3.37,0,7.74.08,3.86.81,6.72,1.35,8.75,1.31,4.98,2.04,7.77,4.04,8.42,1.36.44,2.12-.5,8.42-4.04,4.93-2.77,5.11-2.56,6.4-3.7,1.07-.96,4.2-4.03,5.05-8.75.32-1.78-.01-3.88-.67-8.08-.95-6.01-1.81-6.55-1.68-10.1.09-2.6.59-3.39,0-5.05-.86-2.4-2.96-3.66-4.71-4.71-3.05-1.84-5.83-2.23-9.09-2.69-3.3-.47-4.96-.71-6.4,0-3.09,1.51-3.41,5.23-4.71,5.05-1.1-.15-1.75-2.95-1.68-5.05.12-3.88,2.73-6.45,3.03-6.73,1.77-1.69,4.23-2.16,9.09-3.03,8.09-1.45,9.66-.1,10.1.34.17.17,1.38,1.41,1.35,3.03-.02.79-.32,1.06-1.01,2.69-.94,2.23-1.41,3.34-1.01,4.04.59,1.01,2.12.15,3.37,1.35.94.9.47,1.78,1.68,3.7.45.72,1.12,1.79,1.68,1.68.79-.15,1.07-2.62,1.01-4.38-.12-3.39-1.69-8.27-4.04-8.42-1.71-.1-3.94,2.31-4.71,4.38-.19.51-.37,1.23-1.01,2.02-.12.15-.98,1.19-2.36,1.68-1.55.55-2.56,0-4.71-.34-2.42-.37-4.64-.71-6.4.34-1.89,1.13-2.94,3.68-3.03,5.72-.1,2.18.9,3.5,0,5.39-.2.42-.58,1.18-1.35,1.35-.63.14-1.36-.16-1.68-.67-.38-.59.09-1.02,0-2.02-.14-1.55-1.39-1.81-1.35-3.03.04-.98.89-2.04,1.68-2.02.93.02,1.5,1.52,1.68,2.02.49,1.31.37,2.43.34,3.03-.07,1.42.51,2.96,1.68,6.06,1.43,3.78,2.15,5.68,3.7,7.4,1.02,1.13,3.44,3.82,7.07,4.04,3.48.21,6.08-1.98,7.74-3.37,3.06-2.57,2.79-4.37,6.06-8.08.56-.64,1.21-1.31,1.35-2.36.17-1.27-.55-2.12,0-3.03.35-.58.79-.48,1.01-1.01.44-1.04-.69-2.79-1.35-2.69-.63.09-.84,1.87-1.01,3.37-.32,2.71-.68,5.79.67,9.09,1.1,2.68,2.78,4.17,6.06,7.07,3.19,2.82,4.13,2.75,6.4,5.39,2.24,2.6,3.03,4.66,3.37,5.72.58,1.81.65,3.29.67,4.04.32,8.5-.67,22.55-.67,22.55-.48,6.76-.43,7.89-1.01,15.15-.57,7.12-.59,7.75-.67,7.74-.17,0-.55-2.83,0-6.06.46-2.69,1.05-2.65,2.02-6.4.6-2.32,1.77-9.43,1.35-7.07.14-2.01.38-5.57.67-10.1.4-6.19.5-8.28-.34-11.11-.66-2.22-1.48-4.99-4.04-6.4-2.91-1.6-6.19-.44-7.4,0-4.05,1.44-6.1,4.67-7.4,6.73-.65,1.02-4.28,6.75-2.69,12.46.27.97.72,2.52,2.02,3.03,1.87.74,4.51-1.06,4.38-1.68-.06-.25-.61-.44-1.01-.34-1.37.37-1.37,4.4-1.35,7.74.06,9.16.09,13.74.34,20.53.21,5.76.09,5.4.34,11.78.39,10.15.49,11.91.67,13.46.54,4.69.95,4.92,1.68,11.11.94,7.83.56,9.76-.34,11.44-.24.46-1.84,2.1-5.05,5.39-1.95,2-3.56,3.6-5.39,6.06-1.5,2.02-2.91,3.96-2.36,4.71.5.68,2.4.43,3.7-.34,1.44-.84,1.32-1.81,3.03-3.03.7-.5,2.02-1.44,3.03-1.01.88.37,1.09,1.6,1.35,3.03.12.71.47,3-.34,6.73-.32,1.47-.43,1.37-.67,2.69-.19,1.03-.93,4.99,0,5.39.91.39,3.08-2.74,4.04-4.38,1.6-2.73,1.99-5.06,2.02-6.73.02-.88-.06-2.32-.34-2.36-.31-.04-.78,1.65-1.01,2.69-.96,4.37.59,5.47.34,10.1-.03.56-.12,1.82.67,2.69.12.14.72.75,1.35.67.22-.03,1.18-.22,2.02-3.7,1.22-5.1.52-10.44,0-10.44-.36,0-.63,2.57-.67,4.04-.01.32-.19,7.34,2.36,8.08.84.24,1.62-.3,1.68-.34.92-.65,1.1-2.03,1.01-4.04-.19-4.14-1.45-8.86-2.02-8.75-.49.09-.44,3.78.67,7.07.62,1.84,1.91,4.55,2.69,4.38.77-.17,1.13-2.8.67-5.05-.28-1.36-.79-2.28-1.01-2.69-1.02-1.95-.97-3.37-1.35-9.09-.28-4.16-.71-8.3-1.01-12.46,0,0-.65-.65-.67-.67-.81-.8-4.16.35-7.4.34-1.66,0-2.6,0-3.37-.67-1.3-1.13-.79-3.03-1.01-5.72-.21-2.53-1.04-4.38-2.69-8.08-1.81-4.05-2.8-6.26-5.05-8.42-3.01-2.89-5.1-2.64-7.4-6.06-1.5-2.21-1.65-3.84-1.68-4.38-.11-1.81.58-2.28.67-4.04.11-2-.58-5.05-2.69-6.4-2.04-1.29-4.53-.44-7.74.67-2.13.73-4.44,1.53-6.06,3.7-1,1.34-.78,1.93-2.02,4.71-.97,2.19-1.92,3.66-3.03,5.39-3.38,5.24-4.85,5.33-6.73,8.75-.8,1.45-1.33,3.68-2.36,8.08-.51,2.21-.83,3.75-2.69,14.14-1.41,7.86-1.6,8.99-1.68,11.11-.13,3.12.15,3.54-.34,5.05-1.48,4.6-5.52,5.17-5.72,8.42-.12,2.04,1.37,3.63,3.03,5.39,2.3,2.44,6.71,5.47,8.75,4.04,1.25-.88,1.27-3.2.67-4.71-1.06-2.7-4.51-3.96-7.07-3.03-2.95,1.07-3.57,4.63-3.7,5.39-.55,3.16.86,6.46,3.37,8.42,2.26,1.77,6.17,3.28,7.74,1.68,1.18-1.21.87-3.99-.34-5.39-.03-.04-.72-.83-1.01-.67-.34.18.06,1.61.34,2.36.73,2.02,2,3.38,2.69,4.04,2.32,2.21,3.5,1.8,4.71,3.7.18.29,1.41,2.27.67,3.37-.57.85-2.03.75-3.37.67-8.53-.49-7.12.25-9.76-.34-4.3-.96-7.2-2.73-8.75-3.7-2.84-1.78-4.7-2.98-5.05-5.05-.32-1.86.73-3.52,1.68-5.05,1.88-3.01,3.18-2.46,4.38-5.05.73-1.58.74-2.87,2.02-4.38.45-.53,1.1-1.14,2.02-1.35.62-.14,1.13-.04,1.35,0,1.47.27,4.82.56,6.4,0,1.94-.69,2.57-3.17,3.37-5.72,0,0,.15-.5,5.72-13.8,1.31-3.13,4.12-6.31,6.73-12.12.85-1.88,1.27-2.82,1.68-4.04,1.74-5.08,1.21-7.5,3.37-10.77.7-1.05.55-.49,2.36-2.69,1.28-1.55,3.56-4.51,5.72-8.75,1.55-3.03,2.32-4.59,2.36-6.4.01-.74.02-3.57-2.02-6.06-.45-.56-2.24-2.73-5.05-3.03-.55-.06-1.6-.09-5.05,1.35-4.23,1.76-5.29,2.1-6.06,3.03-.58.7-.89,1.36-1.35,2.36-.8,1.73-1.17,3.29-1.35,4.38-.48.36-1.21.77-2.02.67-1.57-.19-2.48-2.14-3.03-3.37-2.18-4.84-3.41-7.3-4.71-12.12-.14-.51-.96-3.67-.67-7.4.11-1.42.35-2.47,1.01-2.69.58-.2,1.41.21,1.68.67,1.01,1.72-4.41,6.14-7.99,10.08-.93,1.02-13.26,14.94-10.63,28.79,1.21,6.37,5.51,12.42,7.09,11.96,1.45-.42,1.85-6.69,0-7.53-3.03-1.37-14.88,10.54-17.28,24.81-1.59,9.48-2.16,20.32-5.32,22.59-4.4,3.17-9.7-9.34-19.05-11.08-11.78-2.19,6.27,23.28-19.05,14.62-8.75-2.99-4.37,17.44-3.99,20.38-3.35-.75-8.37-1.58-14.47-1.51-6.14.07-15.72.17-25,6-3.87,2.43-8.57,5.38-11,11-2.78,6.43-.56,13.37,4,27,2.56,7.64,5.04,12.76,10,23,8.24,17.01,10.61,18.74,13,19,5.51.6,12.17-6.49,11-10-1.01-3.03-8.02-3.83-13-3-11.57,1.93-22.76,14.44-23,27-.25,12.82,11.05,18.4,8,24-3.6,6.63-22.71,4.86-35,1-7-2.2-9.38-4.33-18-6-6.93-1.34-11.77-1.21-19-1-6.54.19-10.29.84-14,3-.81.47-4.26,2.19-4,3,.24.74,3.38.23,17.5-2.5,12.28-2.37,15.89-3.14,17-6,.41-1.07.26-1.85-1-7-2-8.19-2.6-10.23-3-12-1.56-6.93-.76-12.64,0-18,.61-4.31,1.13-3.3,4-15,.1-.41,1.47-6.15,1-12-.14-1.74-.48-3.95-2-6-.72-.97-1.42-1.52-2-2,0,0-6.42-5.27-11-13-.4-.67-.72-1.3-1-2-.77-1.9-.62-2.75-1-4-.59-1.92-1.49-1.69-4-5-1.9-2.5-2.55-4.16-3-4-.43.15-.29,1.79,0,3,.44,1.79,1.17,2.36,2,4,.83,1.63,2.09,4.98,1,6-1.03.96-3.51-.74-4,0-.37.55.66,2.1,2,3,1.18.79,2.25.84,3,1,2.09.44,3.47,2.14,6,6,3.81,5.81,5.71,8.71,6,10,1,4.41-.48,7.69-2,19-.08.57-.21,1.64,0,3,.4,2.58,1.73,4,3,6,2.14,3.37,3.63,7.57,3,8-.66.45-3.77-3.2-7-7-5.33-6.27-6.32-8.67-6-11,.2-1.46.69-1.22,1-3,.81-4.66-2.29-7.64-1-9,.67-.71,2.19-.6,3,0,.34.25.85.81,1,3,.27,3.89-1.07,5.58,0,7,.44.59,1.24,1.04,2,1,2.22-.12,4.03-4.44,4-8,0-1.1-.04-4.96-3-7-.27-.18-2.6-1.74-5-1-2.21.68-2.13,2.6-4,3-2.21.48-3.08-2.02-6-2-2,.01-4.1,1.19-5,3-.54,1.09-.9,2.9,0,4,.7.86,1.88.91,3,1,6.7.51,7.88,2.03,9,1,1.8-1.65,1.03-7.63-3-10-3.48-2.04-8.03-.61-10,2-1.62,2.14-1.84,5.55-1,6,.33.17.64-.18,1,0,.82.41.09,2.77,0,5-.01.37-.17,6.17,3,8,2.06,1.19,4.6.17,5,0,4.43-1.86,3.84-10.06,5-10,.5.02,1.03,1.51,1,3-.08,4.45-5.02,7.98-5,8,.02.02,2.67-3.5,4-3,1.4.53,1.08,5.41,0,9-.62,2.05-1.47,5.93-3,6-1.89.09-3.87-5.62-4-6-.95-2.81-.79-4.53-2-5-.97-.37-2.28.27-3,1-.71.72-.91,1.59-1,2-.92,4.31.19,6.53-1,9-.75,1.56-2.48,3.32-4,3-1.85-.39-2.96-3.75-2-5,.68-.88,2-.18,3-1,1.44-1.18.71-4.32,0-7-2.14-8.1-3.27-9.02-4-13-.69-3.77.38-2.61,0-11-.25-5.56-.81-7.96,0-12,.59-2.95,2.84-4.95,2-6-.82-1.02-3.18.17-4-1-.82-1.16.79-3.4,0-4-.34-.26-.9-.04-1,0-1.52.63-.92,3.5-2,4-1.13.52-3.51-1.81-5-4-1.47-2.17-3.93-5.63-3-10,.83-3.92,3.85-6.15,5-7,.67-.49,1.99-1.46,4-2,2.67-.73,4.88-.25,6,0,1.49.34,4.78,1.08,7,4,1.3,1.71,1.66,3.41,2,5,.33,1.57.91,4.28,0,7-1.22,3.64-4.7,6.71-8,7-.4.04-2,.14-4,0-1.76-.12-2.31-.32-3,0-1.49.68-1.83,2.9-2,4-1.32,8.5-1.98,12.76-2,13-.77,7.48-1.35,7.32-1,10,.39,3,1.24,4.1,3,9,1.98,5.51,1.41,6.36,3,10,.45,1.04.56,1.15,3,6,2,3.97,2.5,4.72,3,6,.14.36.65,1.7,1,3,1.02,3.84.03,5.36,0,11-.03,4.84.69,5.62,0,9-.28,1.4-.55,1.98-1,4-.89,4-1.36,6-1,7,1.21,3.33,7.38,4.21,11,4,5.33-.3,9.17-4.9,10-4,.25.27.06.82,0,1-.64,1.93-.11,6.61,1,16,1.26,10.61,1.95,16.04,5,22,.87,1.69,2.71,5.29,4,5,.78-.18,1.35-1.76,1-3-.27-.96-1.15-1.87-2-2-2.05-.32-4.14,3.83-8,11-4.69,8.72-7.06,13.1-8,14-4.71,4.48-9.13,4.53-12,10-.66,1.25-1.6,3.11-1,5,.79,2.47,3.46,2.59,4,5,.47,2.1-1.38,2.83-1,5,.56,3.18,5.07,4.69,6,5,1.71.57,5.2,1.32,6,0,.64-1.04-.89-2.6-2-5-1.96-4.24-.08-6.46-1-11-.75-3.71-2.56-8.12-4-8-.5.04-.86.62-1,1-.9,2.42,2.36,6.39,4,6,.68-.16.68-1.01,2-2,.9-.68,1.74-.91,2-1,4.4-1.53,19-21.61,23-25,.15-.12.55-.46,1-1,1.07-1.3,1.4-2.62,2-5,.99-3.95.99-3.91,1-4,.2-1.77.51-4.52-1-6-.99-.96-2.41-1.05-4-1-6.81.22-14.27,2.95-14,4,.08.31.78.2,7,0,10.26-.33,12.81-.2,14-2,.95-1.44.47-3.28,0-5-2.43-8.83-4.14-12.8-6-19-1.84-6.16-2.66-12.06-4-12-.68.03-.91,1.58-3,3-.92.63-1.71.89-2,1-4.7,1.78-11.37,13.08-15,12-.54-.16-.3-.39-3-4-2.78-3.72-3.45-4.03-4-4-1.33.07-2.27,2.16-3,4-2.53,6.41-2.77,10.53-4,22-.23,2.1-.51,4.7,1,7,1.26,1.92,3.6,3.36,4,3,.35-.32-.33-2.41-2-3-1.51-.53-3.16,1.16-4,2-1.86,1.87-5.13,6.34-7,22-.51,4.23-.66,7.22-3,10-2,2.38-3.23,1.79-5,4-1.27,1.58-1.52,2.97-2,14-.24,5.42-.27,7.14,1,9,1.01,1.48,3.04,3.34,5,3,2.07-.36,2.77-3.54,4-9,2.06-9.18.64-12.7,0-14-1.25-2.54-2.62-2.92-3-3-1.33-.29-2.94.34-3,1-.07.8,2.13,2.12,4,2,2.8-.17,4.38-3.51,7-8,4.75-8.15,4.27-5.27,10-15,3.88-6.59,5.83-9.89,7-14,.7-2.45.45-2.48,2-9,1.17-4.93,1.82-7.64,3-11,.32-.9,3.65-10.33,5-10,.88.22.74,4.59,0,8-.63,2.93-1.54,7.12-5,10-2.41,2-5.94,2.34-13,3-8.8.83-9.76-.54-10-1-.52-1.01.24-2,1-4,1.77-4.67.3-6.34,1-13,.71-6.76,2.81-10.62,2-11-.61-.29-1.81,1.87-4,4-4.37,4.25-9.62,5.46-12,6-3.46.79-7.99.94-19-3-16.77-6-18.45-10.69-24-10-2.07.26-9.59,1.87-19,28-9.7,26.91-18.56,51.51-6,65,10.85,11.66,34.48,11.55,37,6,1.82-4.02-6.09-13.79-12-13-11.71,1.57-23.24,39.55-13,48,10.02,8.27,30.52-20.68,68-20,25.99.47,33.12,14.7,58,20,45.19,9.62,93.6-15.43,93-27-.13-2.49-2.59-5.89-5-6-3.33-.15-7.43,5.6-8,11-.43,4.09,1,9.46,17,25,16.14,15.68,20,15.37,22,22,1.05,3.47,1.08,7.14-8,31-8.75,22.99-11.53,26.83-10,34,2.6,12.17,15.13,22.15,20,20,4.13-1.83,4.4-13.11,2-14-3.29-1.23-17.75,14.87-17,34,.75,19.09,16.31,32.7,24,34,.9.15,5.86.99,7-1,.4-.7-.05-1.09,0-3,.08-3.19,1.4-3.74,1-6-.29-1.65-1.06-1.7-1-3,.09-2.07,2.06-2.46,2-4-.09-2.2-4.18-3.45-6-4-.52-.16-1.29-.34-2,0-.45.22-.68.55-1,1-1.79,2.52-2.07,2.59-2,3,.17.92,1.6.78,3,2,.93.81.86,1.36,2,4,1.5,3.47,2.36,4.24,3,7,.56,2.42.14,2.87,0,3-.97.86-3.57-.73-4-1-.88-.55-3.5-2.08-4-5-.18-1.05.22-1.07,0-2-.43-1.77-1.87-2.13-3-4-.52-.87-1.28-1.88-1-3,.23-.92,1.06-1.83,2-2,.48-.09.55.09,1,0,.94-.19,1.08-1.08,2-2,1.32-1.32,2.46-.91,3-2,.34-.68-.35-1.19,0-2,.25-.58.76-.84,1-1,.36-.24,1.21-.93,2-5,.8-4.15.11-4.43,1-7,.44-1.27.78-1.69,1-3,.3-1.79-.06-2.63,0-4,.09-1.96.93-2.58,2-5,.57-1.29.36-1.18,2-10,.47-2.52.85-4.48,0-5-.47-.29-.88.14-2,0-.21-.03-2.45-.34-3-2-.36-1.08.08-2.49,1-3,.67-.37,1.42-.17,2,0,3.97,1.19,5.12,3.04,7,3,1.52-.04,2.58-1.28,4-3,2.12-2.57,3.22-5.04,5-10,3.48-9.73,2.29-8.69,4-12,.94-1.83,2.01-3.49,2-6,0-2.78-1.32-4.83-1-5,.32-.17,1.86,1.7,3,4,1.14,2.3,1.5,4.37,1.68,5.42.12.71.3,1.95.32,3.58.05,3.99-.88,7.1-2,11-.91,3.18-1.61,5.61-3,8-.32.56-.67,1.1-1,2-.93,2.58-.08,3.76-1,5-.93,1.24-3.09,1.81-4,1-.79-.7-.75-2.51,0-3,.34-.22.89-.21,1,0,.24.49-1.72,2.49-4,3-1.68.37-3.03-.18-5-1-2.85-1.18-3.2-2.19-7-4-1.45-.69-1.55-.61-2-1-1.43-1.22-1.82-3.15-2-7-.14-2.94.01-3.56,0-7-.02-6.3-.53-6.48,0-9,.44-2.13.98-2.86,1-5,.02-2.31-.6-2.95,0-4,.89-1.56,2.79-1.06,4-3,.63-1,.35-1.49,1-2,.93-.72,2.18-.25,4,0,1.97.28,1.7-.1,5,0,5.86.18,8.79.28,11,1,.35.11,1.27.43,2,0,.7-.42.89-1.32,1-2,.43-2.72-.1-3.77,0-7,.04-1.39.18-1.88,0-3-.22-1.4-.66-1.88-1-3-.57-1.88-.07-2.88,0-5,.03-1.01-.35-3.36-1-6-.16-.66-.35-1.36,0-2,.6-1.11,2.51-1.55,3-1,.21.24.24.75,0,1-.89.94-5.29-1.82-7-3-2.97-2.06-6.32-4.09-7-7-.2-.86-.44-1.9,0-3,.42-1.03,1.16-1.41,1-2-.16-.61-1.15-1.05-2-1-1.06.06-1.58.84-3,2-1.04.85-1.88,1.34-3,2-2.94,1.72-3.92,1.36-6,3-.73.58-1.17,1.07-2,2-1.69,1.9-2.92,3.28-3,5-.02.35.01.73,1,3,1.8,4.14,2.61,4.98,3,7,.48,2.45.12,3.67,0,4-.34.94-1.03,1.98-1,2,.02.01.32-.75,1-1,.45-.16.88-.04,1,0,1.11.33,1.8,1.79,2,3,.26,1.57-.45,1.91,0,3,.43,1.06,1.49,1.69,2,2,1.21.72,1.9.58,2,1,.21.87-2.5,2.46-3,2-.32-.3.48-1.22,0-2-.29-.46-.78-.46-1-1-.15-.37-.08-.75,0-1,0,0,0-.16,0-1,0-1.31-.02-3.29-1-4-.54-.39-1-.12-3,0-1.85.11-2.29.17-3,0-.48-.12-1.33-.32-2-1-.55-.56-.82-1.29-1-3-.22-2.12-.41-3.33,0-5,.39-1.58.82-3.32,2-4,.21-.12.79-.4,1-1,.15-.44.04-.84,0-1-.2-.76-1.04-3.93,0-6,.43-.86,1.09-1.34,2-2,.81-.59,1.61-.95,3-2,.88-.66.97-.82,1-1,.21-1.2-2.37-2.65-3-3-1.37-.77-1.54-.52-2-1-1.41-1.48-.46-4.54,0-6,.49-1.56.82-2.82,2-4,1.26-1.27,2.64-1.63,4-2,1.63-.44,1.93-.11,2,0,.18.28-.15.58,0,1,.22.61,1.19.38,2,1,.54.42.7.97,1,2,.04.15.74,2.59,0,3-.33.18-.67-.21-1,0-.43.27-.43,1.3,0,2,.4.66,1.24,1.1,2,1,.99-.13,1.22-1.09,2-1,.51.06,1.01.55,1,1,0,.14-.06.47-1,1-.64.36-2.04,1.15-4,1-.94-.07-1.39-.31-2,0-.57.29-.56.7-1,1-1,.69-2.91-.11-4-1-1.73-1.41-1.95-3.49-2-4-.19-2.07.74-3.58,1-4,1.04-1.65,2.52-2.33,4-3,1.36-.62,2.49-1.13,4-1,1.62.14,3.77.82,4,2,.08.43-.14.63,0,1,.35.92,2.64.21,3,1,.14.32-.16.51,0,1,.17.51.56.49,1,1,.74.84.4,1.73,1,2,.43.19.73-.19,1,0,.54.39.21,2.56-1,3-.39.14-.91.18-1,0-.11-.23.4-.9,1-1,.94-.15,1.59,1.19,2,1,.45-.2-.28-1.79,0-4,.1-.76.24-1.91,1-3,1.11-1.6,2.49-1.56,3-3,.28-.79-.1-.91,0-2,.24-2.59,2.51-3.23,3-6,.11-.62-.03-.46,0-2,.05-3.03.6-5.35,1-7,.63-2.61,1-4.12,2-6,1.72-3.23,3.48-4.1,4-7,.16-.9-.48-1.83,0-3,.32-.8.78-1.04,1-2,.2-.85-.07-1.03,0-2,.1-1.38.68-1.51,1-3,.09-.42.31-1.62,0-3-.39-1.72-1.35-2.6-1-3,.19-.22.68-.17,1,0,1.14.6.92,3,1,3,.1,0,.66-3.92,0-6-.06-.18-.25-.75,0-1,.25-.25.82-.07,1,0,1.51.64.78,4.97,1,5,.1.01.07-4.84,1-5,.33-.06.83.48,1,1,.14.44.04.83,0,1-.34,1.32-.75,2.71-1,4-.14.69-.13.9,0,1,.21.16.68-.06,2-1,2.06-1.47,2.64-2.19,3-2,.36.19.31,1.2,0,2-.61,1.56-1.98,1.7-3,3-1.04,1.31-.02,1.76-1,4-.8,1.83-1.7,2.23-2,4-.16.92-.05,1.63,0,2,.35,2.7-.16,5.82-1,11-.56,3.47-1.01,6.28-2,9-.14.38-.55,1.47-1,3-.61,2.04-.91,3.56-1,4-1.09,5.14-4.41,6.93-5,12-.39,3.3,1.01,2.66,1,8,0,3.72-.69,6.38,1,8,.78.75,2.14,1.34,2,2-.09.4-.65.42-1,1-.45.75-.09,1.71,0,2,.02.06.01,3.04,0,9-.02,9.15-4.7,14.66-3,21,.13.48.55,1.9,1,4,.27,1.25.74,3.47,1,6,.11,1.08.42,4.38,0,8-.43,3.65-1.19,4.09-4,12-2.22,6.25-3.13,9.9-5,10-1.24.07-2.4-1.44-3-1-.39.29-.07,1.1,0,2,.15,2-1.06,2.59-2,5-1.42,3.63.04,5.59-2,8-.5.59-.53.41-1,1-1.54,1.93-1.05,3.66-2,6-.56,1.38-1.25,2.05-2,3-2.44,3.11-6.34,9.57-5,11,.59.63,1.57-.4,4,0,.36.06,3.46.61,5,3,.89,1.38.25,1.79,1,4,.83,2.42,2.35,4.14,4,6,1.54,1.74,2.44,2.34,3,4,.2.59.73,2.18,0,3-.21.23-.86.78-4,0-2.48-.62-4.76-1.62-7-3-1.67-1.02-2.78-2.02-5-4-1.13-1.01-1.97-1.84-2-3-.02-.8.34-1.8,1-2,.72-.22,1.53.57,2,1,1.77,1.63,4.06,2.59,6,4,2.88,2.09,5.93,4.1,6,4,.06-.09-2.14-2.02-5-4-3.87-2.68-5.17-2.83-7-5-.84-1-2.72-3.23-2-5,.58-1.43,2.59-1.9,3-2,2.52-.6,4.15.81,5,0,.51-.49.25-1.31,0-3-.09-.64-.71-4.99,0-9,.3-1.68.51-1.5,1-4,.55-2.77.42-3.67,1-4,1.16-.66,3.56,1.82,6,4,6.08,5.45,6.25,3.62,14,10,4.14,3.41,7.68,6.89,9,6,.39-.26.89-1.12,1-2,.13-1.01-.33-1.45,0-2,.46-.77,1.63-.36,2-1,.42-.75-1.01-1.56-1-3,0-.52.2-1.11,3-4,1.35-1.39,1.49-2.05,2-2,.69.06.79,1.11,2,3,.95,1.49,1.71,2.68,3,3,1.2.3,2.75-.18,3-1,.32-1.03-1.41-2.52-3-3-.51-.15-1.31-.39-2,0-.93.53-1.24,1.94-1,3,.39,1.74,2.23,2.35,2,3-.26.73-2.63.13-3,1-.33.77,1.33,1.74,1,3-.14.52-.59,1.01-1,1-.66-.02-1.34-1.31-1-2,.34-.69,1.47-.26,2-1,.64-.9-.59-2.17,0-3,.6-.84,2.68-.71,3,0,.2.44-.4.9-1,2-.78,1.44-.47,1.98-1,4-.48,1.81-1.15,4.34-3,5-.86.31-1.66.09-2,0-2.02-.54-2.83-2.57-3-3-.13-.33-.93-2.35,0-4,.66-1.17,1.47-.91,2-2,.66-1.37-.44-2.17,0-4,.23-.95.82-1.63,2-3,1.5-1.74,1.86-1.52,3-3,1.15-1.49.88-1.83,2-3,1.01-1.05,1.59-1.15,2-2,.49-1-.28-1.61,0-3,.18-.89.59-1.38,1-2,.84-1.3,1.23-2.87,2-6,.99-4.03.38-3.56,1-5,1.32-3.07,3.24-3.23,4-6,.45-1.63-.16-1.76,0-4,.37-5.06,3.62-6.08,3-9-.64-3.01-4.57-4.12-4-6,.15-.48.56-.91,1-1,1.35-.26,2.84,2.68,3,3,1.12,2.21.13,2.99,1,4,1.4,1.62,4.08.11,6,2,.8.78,1.18,1.86,1,2-.23.18-1.36-1.23-6-6-1.83-1.88-3.44-3.5-4-6-.2-.9-.17-1.49,0-2,.58-1.79,2.74-2.5,4-3,5.08-1.99,8.04-4.92,8-5-.04-.06-2.61,1.13-6,2-.88.23-1.55.36-2,0-1.09-.89.07-3.98,0-4-.07-.02-.61,3.32-2,6-.73,1.41-1.21,1.36-6,6-1.55,1.5-2.34,2.27-3,3-2.14,2.37-2.51,3.35-4,5-1.66,1.84-2.52,2.07-5,4-1.48,1.15-5.12,3.98-8,8-3.42,4.77-2.46,6.62-5,8-3.71,2.02-8.3-.53-9,1-.33.72.39,1.96,1,2,1.02.06,1.07-3.28,3-4,1.97-.73,5.18,1.55,5,3-.1.79-1.16.91-3,2-3.96,2.35-4.01,4.76-6,5-3.01.36-6.97-4.67-6-7,.68-1.63,3.22-.63,6-3,2.63-2.24,2.31-4.8,4-5,1.68-.2,3.51,2.14,4,4,.19.72.06.92,0,1-.67.83-4.43-.18-5-2-.43-1.38,1.14-2.65,4-6,0,0,2.29-2.68,6-8,4.82-6.9,3.18-7.39,6-10,4.13-3.82,7.89-3,10-7,.75-1.43.9-2.71,1-5,.54-11.81-1.48-17.24,0-18,2.46-1.26,12.39,11.47,11,13-.33.36-1.55-.09-4-1-2.93-1.09-4.5-1.67-5-3-.44-1.16.32-1.9,1-4,1.56-4.84-.6-6.81,1-9,1.88-2.58,6.57-2.14,8-2,2.64.25,4,1.12,8,3,6.78,3.19,10.17,4.78,11,4,2.41-2.27-8.9-18.83-9-19,0,0-1.83-.26-2,0-.44.66,11.78,5.9,15,12,.15.29.45.89,1,1,1.95.4,6.15-5.37,6-11-.1-3.75-2.03-3.42-5-11-2.17-5.52-2.17-8.32-5-10-.52-.31-2.71-1.61-5-1-1.97.52-2.39,2.03-4,2-1.98-.03-2.72-2.32-4-2-.98.25-1.19,1.76-2,4-.31.87-.1.14-3,6-5.42,10.95-2.63,6.35-5,11-.59,1.16-1,1.9-1,3-.01,3.19,2.79,6.4,4,6,1.38-.46,1.25-5.83,0-10-1.22-4.07-2.57-3.82-3-7-.59-4.35,1.68-6.58,0-9-.91-1.31-1.95-1.2-3-3-.87-1.49-.73-2.58-1-4-.75-3.95-3.5-4.67-5-8-1.41-3.14-.61-6.26,0-9,.83-3.77,2.59-6.66,4-9,2.61-4.33,4.82-6.35,4-8-.46-.93-1.49-.96-3-3-.08-.11-1.27-1.73-1-2,.18-.18.81.44,2,1,1.81.85,3.53.93,5,1,.9.04,1.74.01,2,0,2.08-.08,2.7-.36,3,0,.42.52-.3,1.78-1,3-.87,1.51-1.35,1.78-2,3-.6,1.14-.57,1.66-1,3-1.11,3.5-2.42,3.46-3,6-.57,2.51.66,2.75,0,5-.84,2.85-3.4,4.47-3,5,.15.2.55.02,1,0,.44-.02,2.34.08,5,6,0,0,1.13,2.52,3,9-1.36-4.71-1.32-5.86-1-6,.47-.2,1.64,1.76,5,5,1.29,1.24,1.99,1.78,3,2,2.08.44,4.05-.8,4-1-.05-.2-2.02.75-4,0-.21-.08-2.46-.92-3-3-.07-.25-.27-1.07,0-2,.26-.9.74-1.1,1-2,.25-.86-.03-1.22,0-2,.06-1.58,1.32-3.27,3-4,.23-.1,2.35-1.03,4,0,.47.29.74.64,1,1,.5.69.9,1.2,1.09,1.51,1.51,2.53,2.59,4.34,1.91,5.49-.35.6-1.08.83-1,1,.12.27,1.75-.41,2,0,.18.29-.58.77-1,2-.04.1-.53,1.6,0,2,.26.19.53-.05,1,0,1.23.12,1.92,2.04,2,2,.12-.05-1.32-3.34-2-5-2.18-5.32-3.11-9.89-5-11-.16-.09-.71-.39-1-1-.4-.83-.08-1.73,0-2,.63-2.12-1.69-4.3-3-9-1.07-3.86-.33-5.34-2-7-.73-.72-1.37-.94-2-2-1.05-1.77-.23-2.84-1-4-.81-1.23-3.44-.99-5.03-1.47-.19-.06-.59-.19-.97-.53,0,0-.2-.15-.34-.37-.58-.9-.04-2.47-.66-7.63-.23-1.91-.4-2.62-1-3-1.38-.87-4.13.55-5,1-1.25.64-1.76,1.18-2,1-.6-.45,2.43-4.67,2-5-.27-.21-2.07,1.03-3,3-1.56,3.28.23,6.58,1,8,.29.54.6.99,1,1,.86.03,1.61-1.97,2-3,.67-1.77.41-2.08,1-3,.11-.17,1.33-2.01,3-2,.37,0,1.08.1,3,2,2.51,2.49,2.82,3.86,4,4,1.2.14,2.46-.89,3-2,.04-.07.77-1.65,0-3-.31-.53-.73-.83-1-1-2.74-1.71-6.02-.2-8-2-.86-.78-1.43-2.14-1-3,.41-.81,1.6-.95,2-1,1.46-.17,3.04.52,3,1-.04.51-1.93.74-4,1-.95.12-5.84.72-6,0-.11-.51,2.14-1.53,4-2,1.37-.35,3.52-.9,6,0,2.25.82,3.51,2.38,4,3,.58.74,2.9,3.69,2,7-.55,2.03-2.06,3.24-3,4-1.87,1.51-4.07,1.71-4,2,.04.19.94.19,1,0,.06-.21-.96-.46-1-1-.03-.4.47-.9,1-1,1.35-.25,2.68,2.19,3,2,.19-.11-.61-1.27-1-3-.3-1.32-.35-2.9,0-3,.37-.11.98,1.49,3,4,0,0,.88,1.09,1,1,.21-.15-2.99-3.62-2-6,.2-.48.63-1.06,1-1,.5.07.25,1.7,1,4,.31.94.79,2.05,1,2,.24-.06.17-1.76,0-3-.12-.87-.26-1.37,0-2,.24-.58.76-1.1,1-1,.29.12.07,1.13,0,2-.12,1.45.3,2.64,1,5,.35,1.19.67,2.02,1,2,.3-.01.35-.7,1-1,.35-.16.86-.21,1,0,.22.31-.67.81-1,2-.15.55-.02.65,0,3,0,.6,0,.83,0,1,.02,1.89,1.25,3.75,2,5,1.9,3.16,1.2,3.14,3,6,1.56,2.48,1.68,1.85,3,4,2.67,4.33,2.95,8.12,3,9,.08,1.35-.1,1.12,0,2,.51,4.56,4.57,5.05,6,9,.56,1.56.04,4.7-1,11-.19,1.12-.57,3.3,0,6,.31,1.47.73,2.28,1,3,2.26,6.13-3.73,14.63-4,15-2.43,3.38-5.68,5.95-5,7,.39.6,1.81.33,2,1,.14.52-.66.9-1,2-.28.9-.07,1.68,0,2,.42,2.07-.75,8.15-2,12-2.27,7-4.48,5.64-8,14-1.88,4.46-2.98,8.99-5,9-.83,0-2.06-.75-2-1,.05-.18.82-.28,1,0,.27.42-1.09,1.38-2,3-.87,1.54-.88,2.9-1,4-.21,1.93-1.47,4.65-4,10-1.82,3.86-2.73,5.78-4,8-4.39,7.66-8.21,11.06-7,13,.46.74,1.43.91,2,1,11.5,1.82,24,1,24,1,3.26-.21,8.06-.38,14,0"
            />
          </g>
        </svg>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;