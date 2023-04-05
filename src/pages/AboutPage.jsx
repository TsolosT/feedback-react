import Card from "../components/shared/Card"
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <h1>About this Project</h1>
        <p>This is a React Feedback Web App., it created for getting started in React.</p>
        <p>Version: 1.0.0</p>
        <p>
            <Link to="/">Back to Home</Link>
        </p>
    </Card>
  )
}

export default AboutPage