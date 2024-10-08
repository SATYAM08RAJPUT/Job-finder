import "./header.css"

export default function Header({ setSearchTermData, setLocationData, setExperinceData }) {
    return (
        <>
            <header>
                <div className="left-side">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcqtn1hJnHuEinR1CIE7PyJIU_IHzE6MVFg&s" />
                </div>
                <div className="middle-side">
                    <input type="search" placeholder="Search by job, company" onChange={(e) => setSearchTermData(e.target.value)} />
                    <input type="search" placeholder="Location" onChange={(e) => setLocationData(e.target.value)} />
                    <input type="search" placeholder="Experience" onChange={(e) => setExperinceData(e.target.value)} />
                </div>
                <div className="right-side">
                    <i className="fa">&#xf0a2;</i>
                    <i className="fa">&#xf0b1;</i>
                    <i className="fa">&#xf27b;</i>
                    <i className="fa">&#xf07a;</i>
                </div>
            </header>
        </>
    )
}
