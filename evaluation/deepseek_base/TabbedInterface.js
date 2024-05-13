const tabs = [
  { label: 'Tab 1', content: <p>Content for tab 1</p> },
  { label: 'Tab 2', content: <p>Content for tab 2</p> },
  { label: 'Tab 3', content: <p>Content for tab 3</p> },
];

const TabbedInterface = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index}>
            <button
              onClick={() => setActiveTab(index)}
              disabled={index === activeTab}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};
