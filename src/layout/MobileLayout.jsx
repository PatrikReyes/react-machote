import logo from "../assets/LogoFull.png";

export const MobileLayout = ({children}) => {
  return (
    <div style={{padding: 10, width: '93%'}}>
    <div style={{textAlign: 'center', marginBottom: 20}}>    <img src={logo} style={{ maxHeight: 100 }} /></div>
        {children}
    </div>
  )
}
