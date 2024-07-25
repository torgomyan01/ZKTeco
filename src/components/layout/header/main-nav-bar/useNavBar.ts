import { useRouter } from "next/navigation";
import {
  SetStateAction,
  useRef,
  useState,
  Dispatch,
  useEffect,
  useMemo,
} from "react";

type TypedUseNavBar = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const useNavBar = ({ setIsOpen }: TypedUseNavBar) => {
  const [activeLinks, setActiveLinks] = useState<{ id: string; col: any[] }>({
    id: "",
    col: [],
  });
  const [key, setKey] = useState(0);
  const [animateComplete, setAnimateComplete] = useState(false);
  const [keyAnimation, setKeyAnimation] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { push } = useRouter();

  useEffect(() => {
    if (activeLinks.col.length > 0) {
      setIsOpen(true);
      // document.body.style.overflow = "hidden";
      // document.body.style.height = "100vh";
      if (animateComplete) {
        setKeyAnimation((prevKey) => prevKey + 1);
      }
      setTimeout(() => setKey((prevKey) => prevKey + 1), 500);
    } else {
      // const timer = setTimeout(() => {
      //   setIsOpen(false);
      // }, 600);
      // document.body.style.overflow = "visible";
      // document.body.style.height = "auto";
      setKeyAnimation(0);
      // return () => clearTimeout(timer);
    }
  }, [activeLinks, setIsOpen, animateComplete]);
	useEffect(() => {
		if(animateComplete && !activeLinks.col.length) setIsOpen(false)
	})
  useEffect(() => {
    if (ref.current && ref.current.clientHeight > 100) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref.current?.clientHeight]);

  const handleMouseEnter = (id: string, colums: any[]) => {
    setActiveLinks({ id, col: colums });
  };

  const handleMouseLeave = () => {
    if (animateComplete) {
      setKeyAnimation(0);
      setActiveLinks({ id: "", col: [] });
      setKey(0);
      setAnimateComplete(false);
    }
  };
  return useMemo(
    () => ({
      handleMouseEnter,
      handleMouseLeave,
      activeLinks,
      key,
      animateComplete,
      ref,
      push,
      height,
      setAnimateComplete,
      keyAnimation,
    }),
    [
      handleMouseEnter,
      handleMouseLeave,
      activeLinks,
      key,
      animateComplete,
      ref,
      push,
      height,
      setAnimateComplete,
      keyAnimation,
    ],
  );
};
