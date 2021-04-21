import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          id: 1,
          linkUrl: "hats",
          title: "hat",
          imageUrl:
            "https://images.unsplash.com/photo-1569520045266-66f21ad8a4be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        {
          id: 2,
          linkUrl: "earrings",
          title: "earrings",
        },
        {
          id: 3,
          linkUrl: "shoes",
          title: "shoes",
        },
        {
          id: 4,
          linkUrl: "hat",
          title: "lol",
        },
        {
          id: 5,
          linkUrl: "hat",
          title: "tf",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProp }) => (
          <MenuItem key={id} {...sectionProp} />
        ))}
      </div>
    );
  }
}

export default Directory;
