import { useState, useEffect } from 'react'

function About() {
  const [githubStats, setGithubStats] = useState({
    commits: 0,
    repos: 0,
    loading: true
  })

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const currentYear = new Date().getFullYear()
        const startOfYear = `${currentYear}-01-01T00:00:00Z`
        
        const query = `
          query {
            user(login: "ArthanKyle") {
              repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC) {
                totalCount
              }
              contributionsCollection(from: "${startOfYear}") {
                totalCommitContributions
                restrictedContributionsCount
              }
            }
          }
        `

        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Note: For production, you should use an environment variable for the token
            // 'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
          },
          body: JSON.stringify({ query })
        })

        const data = await response.json()
        
        if (data.data && data.data.user) {
          const { repositories, contributionsCollection } = data.data.user
          setGithubStats({
            commits: contributionsCollection.totalCommitContributions,
            repos: repositories.totalCount,
            loading: false
          })
        } else {
          throw new Error('Failed to fetch GitHub data')
        }
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
        // Fallback to REST API if GraphQL fails (no token)
        try {
          const userResponse = await fetch('https://api.github.com/users/ArthanKyle')
          const userData = await userResponse.json()
          
          setGithubStats({
            commits: 1179, // Fallback value
            repos: userData.public_repos,
            loading: false
          })
        } catch (restError) {
          setGithubStats({
            commits: 1179,
            repos: 10,
            loading: false
          })
        }
      }
    }

    fetchGithubStats()
  }, [])

  return (
    <section id="about" className="about">
      <div className="section-number">01</div>
      <div className="about-content">
        <div className="about-text">
          <h2>About</h2>
          <h3>Developer. Educator. Builder.</h3>
          <p>
            Full stack developer based in the Philippines, serving dual roles as software developer and college educator. System Development graduate passionate about creating software that endures.
          </p>
          <p>
            I don't just write code — I help the next generation understand why it works. Currently teaching at a private college while building production-grade systems.
          </p>
          <p>
            Currently fascinated by: AI & ML, scalability, system architecture, and blockchain.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">
              {githubStats.loading ? '...' : githubStats.commits.toLocaleString()}
            </div>
            <div className="stat-label">Commits in {new Date().getFullYear()}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {githubStats.loading ? '...' : githubStats.repos}
            </div>
            <div className="stat-label">Public Repositories</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2+</div>
            <div className="stat-label">Active Roles</div>
          </div>
          <div className="stat-card stat-location-card">
            <div className="stat-location">
              <span className="location-pin">📍</span>
              <span>Philippines</span>
            </div>
          </div>
          <div className="stat-card stat-badge">
            <div className="badge-text">System Development Graduate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
