import { Dropdown } from 'react-bootstrap'

const Language = () => {
    const languages = [
        { name: 'English', fileName: 'us', href: '#' },
        { name: 'Arabic', fileName: 'ae', href: '#googtrans(en|ar)' },
        { name: 'Deutsch', fileName: 'de', href: '#googtrans(en|de)' },
        { name: 'Italiano', fileName: 'it', href: '#googtrans(en|it)' },
        { name: 'Tiếng Việt', fileName: 'vn', href: '#googtrans(en|vi)' },
        { name: 'Portuguese', fileName: 'br', href: '#googtrans(en|pt)' },
        { name: 'Español', fileName: 'es', href: '#googtrans(en|es)' },
        { name: 'Chinese', fileName: 'cn', href: '#googtrans(en|zh-CN)' },
        { name: '한국어', fileName: 'kr', href: '#googtrans(en|ko)' },
        { name: 'Русский', fileName: 'ru', href: '#googtrans(en|ru)' },
        { name: 'Hindi', fileName: 'in', href: '#googtrans(en|hi)' },
        { name: 'ภาษาไทย', fileName: 'th', href: '#googtrans(en|th)' },
    ]

    return (
        <div className="wallet-language-box">
            <Dropdown>
                <Dropdown.Toggle
                    style={{
                        background: 'transparent',
                        border: 0,
                        padding: 0,
                    }}>
                    <span>
                        <img
                            className="flag-img"
                            src="assets/images/flag/us.png"
                            alt="USA"
                        />{' '}
                        English
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <ul
                        className="language-dropdown"
                        style={{ padding: '.5rem' }}>
                        {languages.map(lang => (
                            <Dropdown.Item key={lang.name} as="li">
                                <a
                                    href={lang.href}
                                    className="lang-br lang-select"
                                    data-lang={lang.fileName}>
                                    <span>
                                        <img
                                            className="flag-img"
                                            src={`assets/images/flag/${lang.fileName}.png`}
                                            alt="USA"
                                        />
                                    </span>
                                    {lang.name}
                                </a>
                            </Dropdown.Item>
                        ))}
                    </ul>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Language
