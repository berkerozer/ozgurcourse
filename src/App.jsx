import Layout from "./components/Layout";
import BlogCover from "./components/BlogCover";
import Counter from "./components/Counter";
import Form from "./components/Form";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const blog = [
  {
    title: "Blog Post 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Blog Post 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Blog Post 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Blog Post 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Blog Post 5",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Ozgur() {
  return (
    <Layout>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <>about</>
            </Route>
            <Route path="/users">
              <>users</>
            </Route>
            <Route path="/">
              <div className="flex flex-col space-y-8">
                <Form></Form>
                <Counter />
                <div className="flex flex-wrap space-x-4">
                  {blog.map((i) => {
                    return (
                      <BlogCover
                        title={i.title}
                        content={i.content}
                        view="asd"
                      />
                    );
                  })}
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </Layout>
  );
}

export default Ozgur;
