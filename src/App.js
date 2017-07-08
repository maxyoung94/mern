class BugFilter extends React.Component {
  render() {
    return (
      <p>ATTN: This is for a filter.</p>
    )
  }
}

class BugTable extends React.Component {
  renderRow(bug) {
    return (
      <BugRow id={bug.id} title={bug.title} status={bug.status} priority={bug.priority} author={bug.author} />
    )
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          <BugRow id={1} title="It started out with a kiss." status="Open" priority="X9" author="Rax Fung" />
          <BugRow id={2} title="It all came crashing down." status="Open" priority="X16" author="Rax Fung" />
        </tbody>
      </table>

    )
  }
}

class BugAdd extends React.Component {
  render() {
    return (
      <p>ATTN: This is for a add section.</p>
    )
  }
}

class BugRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.title}</td>
        <td>{this.props.status}</td>
        <td>{this.props.priority}</td>
        <td>{this.props.author}</td>
      </tr>
    )
  }
}

class BugList extends React.Component {
  render() {
    return (
      <div>
        <h1>A Bug's Life</h1>
        <BugFilter />
        <hr/>
        <BugTable />
        <hr/>
        <BugAdd />
      </div>
    )
  }
}

ReactDOM.render(
	<BugList />,
	document.getElementById('main')
);
