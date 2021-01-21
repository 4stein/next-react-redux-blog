import Router from 'next/router'
import MainLayout from "../components/MainLayout";

const About = () => {
    return (
        <MainLayout title={'About Page'}>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Next with React-Redux and Hooks</h1>
                    <p className="lead">
                        Version <strong>0.99</strong>
                    </p>
                </div>
            </div>
            <button type="button" className="btn btn-outline-primary" onClick={() => Router.push('/')}>Go Home</button>
        </MainLayout>
    )
}

export default About;