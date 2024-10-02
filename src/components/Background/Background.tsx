import { FC, JSX, useEffect, useState } from "preact/compat";
import "./Background.scss";
import codeIcon1 from "../../assets/icons/code-background-1.svg";
import codeIcon2 from "../../assets/icons/code-background-2.svg";

interface CodeList {
  code1List: JSX.Element[];
  code2List: JSX.Element[];
}

const Background: FC = () => {
  const [codeList, setCodeList] = useState<CodeList[]>([]);

  const resizeHandler = () => {
    const countHeight = Math.round(window.innerHeight / 168) + 1;
    const countWidth = Math.round(window.innerWidth / 400) + 1;

    let codeListArray: CodeList[] = [];
    let code1ListArray: JSX.Element[] = [];
    let code2ListArray: JSX.Element[] = [];

    for (let i = 0; i < countHeight; i++) {
      code1ListArray.push(
        <img src={codeIcon1} loading="lazy" alt="Code Icon 1" />
      );
      code2ListArray.push(
        <img src={codeIcon2} loading="lazy" alt="Code Icon 1" />
      );
    }

    for (let i = 0; i < countWidth; i++) {
      codeListArray.push({
        code1List: code1ListArray,
        code2List: code2ListArray,
      });
    }

    setCodeList(codeListArray);
  };

  // const addAndRemoveIcons = () => {
  //   const code1List = document.getElementsByClassName(
  //     "code-1-list"
  //   ) as HTMLCollectionOf<HTMLDivElement>;

  //   const code2List = document.getElementsByClassName(
  //     "code-2-list"
  //   ) as HTMLCollectionOf<HTMLDivElement>;

  //   const code1Element = document.createElement("img");
  //   code1Element.src = codeIcon1;
  //   code1Element.loading = "lazy";
  //   code1Element.alt = "Code Icon 1";

  //   const code2Element = document.createElement("img");
  //   code2Element.src = codeIcon2;
  //   code2Element.loading = "lazy";
  //   code2Element.alt = "Code Icon 1";

  //   for (let i = 0; i < code1List.length; i++) {
  //     code1List[i].appendChild(code1Element);
  //     code2List[i].appendChild(code2Element);
  //   }

  //   code1List[0].remove();
  //   code2List[0].remove();
  // };

  const animationHandler = () => {
    resizeHandler();

    // setTimeout(() => {
    //   addAndRemoveIcons();
    // }, 1000);
  };

  useEffect(() => {
    resizeHandler();
    document.addEventListener("resize", animationHandler);

    return () => {
      document.removeEventListener("resize", animationHandler);
    };
  }, []);
  return (
    <div className="background">
      {codeList.map(({ code1List, code2List }) => (
        <>
          <div className="code-1-list">
            {code1List.map((code) => code)}
            {code1List.map((code) => code)}
          </div>
          <div className="code-2-list">
            {code2List.map((code) => code)}
            {code2List.map((code) => code)}
          </div>
        </>
      ))}
    </div>
  );
};

export default Background;
