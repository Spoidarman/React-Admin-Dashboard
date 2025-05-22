import React from 'react';
import { Card, Col, Row, Table, Button, ProgressBar } from 'react-bootstrap';

const Dashboard: React.FC = () => {
  // Sample data
  const metrics = [
    { 
      title: "Total Revenue", 
      value: "$24,780", 
      change: "+12%", 
      trend: "up",
      icon: "bi-currency-dollar",
      color: "primary",
      progress: 75
    },
    { 
      title: "New Customers", 
      value: "1,254", 
      change: "+8%", 
      trend: "up",
      icon: "bi-people",
      color: "success",
      progress: 60
    },
    { 
      title: "Active Projects", 
      value: "42", 
      change: "-3%", 
      trend: "down",
      icon: "bi-kanban",
      color: "warning",
      progress: 45
    },
    { 
      title: "Task Completion", 
      value: "78%", 
      change: "+5%", 
      trend: "up",
      icon: "bi-check-circle",
      color: "info",
      progress: 78
    }
  ];

  const activities = [
    { id: 1, title: "Project 'Nebula' launched", time: "2 hours ago", icon: "bi-rocket", status: "primary" },
    { id: 2, title: "Monthly report generated", time: "5 hours ago", icon: "bi-file-earmark-text", status: "success" },
    { id: 3, title: "New client onboarding", time: "1 day ago", icon: "bi-person-plus", status: "info" },
    { id: 4, title: "Server maintenance completed", time: "2 days ago", icon: "bi-server", status: "warning" },
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Dashboard Overview</h2>
          <p className="text-muted mb-0">Welcome back! Here's what's happening with your business today.</p>
        </div>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary" className="d-flex align-items-center">
            <i className="bi bi-calendar me-2"></i> Filter
          </Button>
          <Button variant="primary" className="d-flex align-items-center">
            <i className="bi bi-download me-2"></i> Export
          </Button>
        </div>
      </div>

      {/* Metrics Row */}
      <Row className="mb-4 g-4">
        {metrics.map((metric, index) => (
          <Col md={6} lg={3} key={index}>
            <Card className="metric-card h-100">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <Card.Title className="text-muted text-uppercase small fw-semibold mb-2">
                      {metric.title}
                    </Card.Title>
                    <Card.Text className="h3 fw-bold mb-2">{metric.value}</Card.Text>
                    <div className={`d-flex align-items-center ${metric.trend === 'up' ? 'text-success' : 'text-warning'}`}>
                      <i className={`bi bi-arrow-${metric.trend === 'up' ? 'up' : 'down'}-circle me-1`}></i>
                      <small>{metric.change} from last month</small>
                    </div>
                  </div>
                  <div className={`bg-${metric.color}-light rounded-circle p-3`}>
                    <i className={`bi ${metric.icon} text-${metric.color} fs-4`}></i>
                  </div>
                </div>
                <ProgressBar 
                  now={metric.progress} 
                  variant={metric.color} 
                  className="mt-3" 
                  style={{ height: '4px' }}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Main Content Area */}
      <Row className="g-4">
        {/* Sales Chart */}
        <Col lg={8}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <Card.Title className="fw-bold mb-0">Sales Performance</Card.Title>
                <div className="btn-group">
                  <Button variant="outline-secondary" size="sm" active>Week</Button>
                  <Button variant="outline-secondary" size="sm">Month</Button>
                  <Button variant="outline-secondary" size="sm">Year</Button>
                </div>
              </div>
              
              {/* Chart placeholder with better styling */}
              <div className="chart-container bg-light bg-opacity-10 rounded p-4">
                <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                  <div className="text-center">
                    <i className="bi bi-bar-chart-line text-muted fs-1 mb-2"></i>
                    <p className="text-muted">Sales chart visualization</p>
                  </div>
                </div>
              </div>
              
              <div className="d-flex justify-content-between mt-3">
                <small className="text-muted">Total sales: $24,780 (12% increase)</small>
                <small className="text-primary">View detailed report →</small>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Recent Activity */}
        <Col lg={4}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <Card.Title className="fw-bold mb-0">Recent Activity</Card.Title>
                <Button variant="link" size="sm" className="text-decoration-none">View All</Button>
              </div>
              
              <div className="activity-feed">
                {activities.map(activity => (
                  <div key={activity.id} className="activity-item d-flex mb-3">
                    <div className={`activity-icon bg-${activity.status}-light text-${activity.status} rounded-circle flex-shrink-0 me-3`}>
                      <i className={`bi ${activity.icon}`}></i>
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">{activity.title}</h6>
                      <small className="text-muted">{activity.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Additional Section - Projects */}
      <Row className="mt-4 g-4">
        <Col lg={12}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <Card.Title className="fw-bold mb-0">Active Projects</Card.Title>
                <Button variant="outline-primary" size="sm">Add New Project</Button>
              </div>
              
              <Table hover responsive className="m-0">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Team</th>
                    <th>Status</th>
                    <th>Progress</th>
                    <th>Due Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Website Redesign</td>
                    <td>
                      <div className="avatar-group">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="avatar-xs">
                            <div className="avatar-title rounded-circle bg-light text-dark">
                              {i}
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td><span className="badge bg-warning-light text-warning">In Progress</span></td>
                    <td>
                      <ProgressBar now={65} variant="warning" style={{ height: '5px' }} />
                      <small className="text-muted">65% complete</small>
                    </td>
                    <td>May 30, 2023</td>
                    <td>
                      <Button variant="link" size="sm" className="text-primary p-0">
                        <i className="bi bi-three-dots-vertical"></i>
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Mobile App Development</td>
                    <td>
                      <div className="avatar-group">
                        {[1, 2].map(i => (
                          <div key={i} className="avatar-xs">
                            <div className="avatar-title rounded-circle bg-light text-dark">
                              {i}
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td><span className="badge bg-success-light text-success">Completed</span></td>
                    <td>
                      <ProgressBar now={100} variant="success" style={{ height: '5px' }} />
                      <small className="text-muted">100% complete</small>
                    </td>
                    <td>May 15, 2023</td>
                    <td>
                      <Button variant="link" size="sm" className="text-primary p-0">
                        <i className="bi bi-three-dots-vertical"></i>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
