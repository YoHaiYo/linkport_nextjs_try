"useclient"

import { useState } from "react";

export const ExampleComponent2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <button onClick={() => { setIsOpen(!isOpen) }}>클릭</button>
      {isOpen && <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>}
    </section>
  )
}