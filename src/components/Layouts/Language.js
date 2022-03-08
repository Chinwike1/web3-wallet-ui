const Language = () => {
    return (
        <div className="wallet-language-box">
            <div className="dropdown">
                <div className="select">
                    <span>
                        <img
                            className="flag-img"
                            src="assets/images/flag/us.png"
                            alt="USA"
                        />{' '}
                        English
                    </span>{' '}
                    <i className="fas fa-caret-down" />
                </div>
                <input type="hidden" name="gender" />
                <div className="dropdown-menu">
                    <ul className="language-dropdown">
                        <li>
                            <a
                                href="#"
                                className="lang-br lang-select"
                                data-lang="en">
                                <span>
                                    <img
                                        className="flag-img"
                                        src="assets/images/flag/us.png"
                                        alt="USA"
                                    />
                                </span>
                                English
                            </a>
                        </li>
                        <li>
                            <a
                                href="#googtrans(en|ar)"
                                className="lang-br lang-select"
                                data-lang="ar">
                                <span>
                                    <img
                                        className="flag-img"
                                        src="assets/images/flag/ae.png"
                                        alt="Arabic"
                                    />
                                </span>
                                Arabic
                            </a>
                        </li>
                        <li>
                            <a
                                href="#googtrans(en|de)"
                                className="lang-br lang-select"
                                data-lang="de">
                                <span>
                                    <img
                                        className="flag-img"
                                        src="assets/images/flag/de.png"
                                        alt="Germany"
                                    />
                                </span>
                                Deutsch
                            </a>
                        </li>
                        <li>
                            <a
                                href="#googtrans(en|it)"
                                className="lang-br lang-select"
                                data-lang="it">
                                <span>
                                    <img
                                        className="flag-img"
                                        src="assets/images/flag/it.png"
                                        alt="Italy"
                                    />
                                </span>
                                Italiano
                            </a>
                        </li>
                        <li>
                            <a
                                href="#googtrans(en|vi)"
                                className="lang-br lang-select"
                                data-lang="vn">
                                <span>
                                    <img
                                        className="flag-img"
                                        src="assets/images/flag/th.png"
                                        alt="Viet Nam"
                                    />
                                </span>
                                Tiếng Việt
                            </a>
                        </li>
                        <li>
                            <a
                                href="#googtrans(en|pt)"
                                className="lang-br lang-select"
                                data-lang="pt">
                                <span>
                                    <img
                                        className="flag-img"
                                        src="assets/images/flag/br.png"
                                        alt="Brazil"
                                    />
                                </span>
                                Portuguese
                            </a>
                        </li>
                        <li>
                            <a
                                href="#googtrans(en|es)"
                                className="lang-br lang-select"
                                data-lang="es">
                                <span>
                                    <img
                                        className="flag-img"
                                        src="assets/images/flag/es.png"
                                        alt="Spain"
                                    />
                                </span>
                                español
                            </a>
                        </li>
                        <li>
                            <a
                                href="#googtrans(en|zh-CN)"
                                className="lang-br lang-select"
                                data-lang="zh-CN">
                                <span>
                                    <img
                                        className="flag-img"
                                        src="assets/images/flag/cn.png"
                                        alt="China"
                                    />
                                </span>
                                Chinese
                            </a>
                        </li>
                        <li>
                            <a
                                href="#googtrans(en|ko)"
                                className="lang-br lang-select"
                                data-lang="ko">
                                <span>
                                    <img
                                        className="flag-img"
                                        src="assets/images/flag/kr.png"
                                        alt="Korea, Republic of"
                                    />
                                </span>
                                한국어
                            </a>
                        </li>
                        <li>
                            <a
                                href="#googtrans(en|ru)"
                                className="lang-br lang-select"
                                data-lang="ru">
                                <span>
                                    <img
                                        className="flag-img"
                                        src="assets/images/flag/ru.png"
                                        alt="Russia"
                                    />
                                </span>
                                Русский
                            </a>
                        </li>
                        <li>
                            <a
                                href="#googtrans(en|ja)"
                                className="lang-br lang-select"
                                data-lang="ja">
                                <span>
                                    <img
                                        className="flag-img"
                                        src="assets/images/flag/jp.png"
                                        alt="Japan"
                                    />
                                </span>
                                日本語
                            </a>
                        </li>
                        <li>
                            <a
                                href="#googtrans(en|hi)"
                                className="lang-br lang-select"
                                data-lang="hi">
                                <span>
                                    <img
                                        className="flag-img"
                                        src="assets/images/flag/in.png"
                                        alt="India"
                                    />
                                </span>
                                Hindi
                            </a>
                        </li>
                        <li>
                            <a
                                href="#googtrans(en|th)"
                                className="lang-br lang-select"
                                data-lang="th">
                                <span>
                                    <img
                                        className="flag-img"
                                        src="assets/images/flag/th.png"
                                        alt="Thailand"
                                    />
                                </span>
                                ภาษาไทย
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Language
