export default function TabButton({children, onSelectTab, isSelected}) {

    return (
        <li><button
          className={isSelected ? 'active' : ''}
          onClick={onSelectTab}
        >{children}</button></li>
    )
}