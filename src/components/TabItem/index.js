// Write your code here
import './index.css'

const TabItem = props => {
  const {tabListItem, onClickTabBtn, isActive} = props
  const {displayText, tabId} = tabListItem
  const onClickTab = () => {
    onClickTabBtn(tabId)
  }
  const actevatedTab = isActive ? 'activatedTabId' : ''
  const activeHorzLine = isActive ? 'activatedHorzline' : ''

  return (
    <li className="listItemCon">
      <button
        className={`btnEle ${actevatedTab}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
      <hr className={`hozLineEl ${activeHorzLine}`} />
    </li>
  )
}

export default TabItem
