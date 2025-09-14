import './Hexbox.css';

const Hexbox = ({Hexcolor}) => {

    return(
    <div>
        <div className="box" style={{
        backgroundColor: Hexcolor
        }}>
        </div>
    </div>
  );
};

export default Hexbox;