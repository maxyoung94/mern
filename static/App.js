class BugFilter extends React.Component {
  render() {
    return React.createElement(
      "p",
      null,
      "ATTN: This is for a filter."
    );
  }
}

class BugTable extends React.Component {
  renderRow(bug) {
    return React.createElement(BugRow, { id: bug.id, title: bug.title, status: bug.status, priority: bug.priority, author: bug.author });
  }

  render() {
    return React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "ID"
          ),
          React.createElement(
            "th",
            null,
            "Title"
          ),
          React.createElement(
            "th",
            null,
            "Status"
          ),
          React.createElement(
            "th",
            null,
            "Priority"
          ),
          React.createElement(
            "th",
            null,
            "Author"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        React.createElement(BugRow, { id: 1, title: "It started out with a kiss.", status: "Open", priority: "X9", author: "Rax Fung" }),
        React.createElement(BugRow, { id: 2, title: "It all came crashing down.", status: "Open", priority: "X16", author: "Rax Fung" })
      )
    );
  }
}

class BugAdd extends React.Component {
  render() {
    return React.createElement(
      "p",
      null,
      "ATTN: This is for a add section."
    );
  }
}

class BugRow extends React.Component {
  render() {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        this.props.id
      ),
      React.createElement(
        "td",
        null,
        this.props.title
      ),
      React.createElement(
        "td",
        null,
        this.props.status
      ),
      React.createElement(
        "td",
        null,
        this.props.priority
      ),
      React.createElement(
        "td",
        null,
        this.props.author
      )
    );
  }
}

class BugList extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "A Bug's Life"
      ),
      React.createElement(BugFilter, null),
      React.createElement("hr", null),
      React.createElement(BugTable, null),
      React.createElement("hr", null),
      React.createElement(BugAdd, null)
    );
  }
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));
