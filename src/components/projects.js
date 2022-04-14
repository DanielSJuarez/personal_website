function Projects() {
    return (
        <>
            <div className="top">
                <div className="hex first top-animation"></div>
                <div className="hex right-animation"></div>
                <div className="top-animation linkHex">
                    <div className="textDiv"  onClick={() =>  window.open('https://github.com/DanielSJuarez/pixel-perfect')}>CSS-Pixel Perfect</div>
                </div>
                <div className="hex bottom-animation"></div>
                <div className="hex left-animation "></div>
                <div className="hex right-animation"></div>
                <div className="hex left-animation"></div>
                <div className="hex top-animation"></div>
            </div>
            <div className="middle-top">
                <div className="hexAlt bottom-animation"></div>
                <div className="hexAlt top-animation"></div>
                <div className="hexAlt bottom-animation"></div>
                <div className="left-animation linkHex">
                    <div className="textDiv"  onClick={() =>  window.open('https://github.com/DanielSJuarez/js-war-game')}>JS-War Game</div>
                </div>
                <div className="hexAlt right-animation"></div>
                <div className="top-animation linkHex">
                    <div className="textDiv"  onClick={() =>  window.open('https://github.com/DanielSJuarez/slackalack-app')}>Slackalacka</div>
                </div>
                <div className="hexAlt bottom-animation"></div>
            </div>
            <div className="middle-bottom">
                <div className="first left-animation linkHex">
                    <div className="textDiv"  onClick={() =>  window.open('https://github.com/DanielSJuarez/full-stack-resturant-app')}>Restaurant App</div>
                </div>
                <div className="hex bottom-animation"></div>
                <div className="left-animation linkHex">
                    <div className="textDiv"  onClick={() =>  window.open('https://github.com/DanielSJuarez/python_wordle')}>Python Wordle</div>
                </div>
                <div className="hex right-animation"></div>
                <div className="top-animation linkHex">
                    <div className="textDiv"  onClick={() =>  window.open('https://github.com/DanielSJuarez/safehandsdoula-app')}>Safe Hands Doula</div>
                </div>
                <div className="hex left-animation"></div>
                <div className="hex top-animation"></div>
            </div>
            <div className="bottom">
                <div className="hexAlt right-animation linkHex">
                    <div className="textDiv"  onClick={() =>  window.open('https://github.com/DanielSJuarez/fullstack-news-app')}>News App</div>
                </div>
                <div className="hexAlt top-animation"></div>
                <div className="hexAlt bottom-animation"></div>
                <div className="hexAlt top-animation"></div>
                <div className="hexAlt right-animation"></div>
                <div className="hexAlt bottom-animation"></div>
                <div className="hexAlt left-animation"></div>
            </div>
        </>
    )
}

export default Projects