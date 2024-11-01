// Write your code here
import './index.css'

const AppsList = props => {
  const {appListItems} = props
  const {imageUrl, appName} = appListItems
  return (
    <>
      <li className="listItemContainer">
        <img src={imageUrl} className="appImgEl" alt={appName} />
        <p className="appHeadEl">{appName}</p>
      </li>
    </>
  )
}

export default AppsList
