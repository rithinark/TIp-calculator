import './App.css';
import logo from './images/logo.svg';
import Button from './components/button/Button';
import Input from './components/input/Input';
import peopleIcon from './images/icon-person.svg';
import dollarIcon from './images/icon-dollar.svg';
import View from './components/view/View';
import Custom from './components/custom/Custom';
import { useState } from 'react';

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip_percent, setTipPercent] = useState(5);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [last_percentElement, setLPE] = useState(null);

  const handleResult = (percent) => {
    const _tip = ((percent / 100) * bill) / people;
    setTip(_tip.toFixed(2));
    setTotal(((bill / people) + _tip).toFixed(2));
  }
  const handleTipPercent = e => {
    setLPE(e.target);
    const percent = e.target.value;
    setTipPercent(percent);
    handleResult(percent);
  }
  const handleReset = e => {
    setBill(0);
    setPeople(1);
    setTip(0);
    setTotal(0);
    if (last_percentElement) last_percentElement.checked = false;
  }

  return (
    <div className="App">
      <img src={logo} id="logo" alt="logo"></img>
      <div className="CalcCard">
        <div className="Box">
          <Input
            id="bill"
            min="0"
            icon={dollarIcon}
            value={bill}
            onChangeValue={(e) => setBill(e.target.value)}
            label="Bill"
            name="Bill"
          />
          <div className="Button-Group-Wrapper">
            <div className="Label">Select Tip%</div>
            <div className="Button-Group">
              <Button type="radio" onChangeValue={handleTipPercent} text="5%" name="tip" value="5" id="tip-5" />
              <Button type="radio" onChangeValue={handleTipPercent} text="10%" name="tip" value="10" id="tip-10" />
              <Button type="radio" onChangeValue={handleTipPercent} text="15%" name="tip" value="15" id="tip-15" />
              <Button type="radio" onChangeValue={handleTipPercent} text="25%" name="tip" value="25" id="tip-25" />
              <Button type="radio" onChangeValue={handleTipPercent} text="50%" name="tip" value="50" id="tip-50" />
              <Custom type="radio" onChangeValue={e => { setTipPercent(e.target.innerText); handleResult(e.target.innerText) }} text="Custom" name="tip" value={tip_percent} id="custom" />
            </div>
          </div>
          <Input
            id="NoP"
            min="1"
            icon={peopleIcon}
            value={people}
            onChangeValue={(e) => setPeople(e.target.value)}
            label="No of People"
            name="people"
          />
        </div>
        <div className="Box" style={{ backgroundColor: 'var(--dark-cyan)', position: 'relative' }}>
          <View title="Tip Amount" result={tip} />
          <View title="Totalt" result={total} />
          <div className="Reset">
            <Button type="button" onClick={handleReset} text="RESET" id="reset-btn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

