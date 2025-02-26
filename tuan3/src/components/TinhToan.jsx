// component content
import logo from '../assets/logo.jpg';
const TinhToan = () => {
    return (
        <div>
            <h1>Tính toán</h1>
            <img src={logo} alt="logo" />
            <div className="box-input">
                <label>Input Your Invest Money</label>
                <input type="number" className="" />
            </div>
            <div className="box-input">
                <label>Input Rate</label>
                <input type="number" className="" />
            </div>
            <div className="box-input">
                <label>Input your Goal</label>
                <input type="number" className="" />
            </div>

        </div>
    );
}

export default TinhToan;