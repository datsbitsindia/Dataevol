// New blogs added December 2025
const newBlogs = {
    'angular-development-trends-2025': {
        slug: 'angular-development-trends-2025',
        title: 'Angular Development Trends and Best Practices for 2025',
        category: 'Development',
        categorySlug: 'development',
        badge: 'New',
        badgeColor: 'success',
        date: 'December 2, 2025',
        readTime: '10 min read',
        views: '1.2k',
        author: {
            name: 'Sagar Patel',
            role: 'Senior Frontend Developer',
            image: '/img/testimonial/1.jpg',
            bio: 'Sagar is a full-stack developer with 8+ years of experience in Angular, React, and modern web technologies. He leads frontend architecture at DataEvol and is passionate about building scalable enterprise applications.',
            social: { linkedin: '#', twitter: '#', github: '#' }
        },
        image: '/img/newblogimag/Angulardevelopment.jpeg',
        excerpt: 'Explore the latest Angular features, standalone components, signals, and best practices for building modern web applications in 2025.',
        content: `
            <p class="lead mb-4">Angular continues to evolve as one of the most powerful frameworks for building enterprise-grade web applications. In 2025, Angular brings exciting new features that make development faster, more efficient, and more enjoyable than ever before.</p>

            <h2 class="h4 mt-5 mb-3">The Evolution of Angular in 2025</h2>
            <p>Angular has come a long way since its inception. The framework has matured significantly, with Google continuously investing in making it more developer-friendly while maintaining its enterprise-grade capabilities. The latest versions introduce groundbreaking features that simplify development without sacrificing performance.</p>

            <div class="highlight-box bg-light-subtle p-4 rounded-3 my-4 border-start border-primary border-4">
                <h5 class="mb-2"><i class="fas fa-lightbulb text-warning me-2"></i>Key Insight</h5>
                <p class="mb-0">According to the State of JS 2024 survey, Angular remains the top choice for enterprise applications, with 78% of Fortune 500 companies using it for their mission-critical applications. The framework's stability and long-term support make it ideal for large-scale projects.</p>
            </div>

            <h2 class="h4 mt-5 mb-3">Standalone Components Revolution</h2>
            <p>Angular's standalone components have matured significantly, eliminating the need for NgModules in most applications. This simplifies the mental model and reduces boilerplate code dramatically. You can now build entire applications without a single NgModule.</p>

            <div class="code-block bg-dark text-light p-4 rounded-3 my-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="text-muted small">Standalone Component Example</span>
                </div>
<pre class="mb-0"><code>@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: \`
    <div class="profile-card">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <button (click)="editProfile()">Edit Profile</button>
    </div>
  \`
})
export class UserProfileComponent {
  user = signal({ name: 'John Doe', email: 'john@example.com' });
  
  editProfile() {
    // Edit logic here
  }
}</code></pre>
            </div>

            <h2 class="h4 mt-5 mb-3">Signals: The Future of Reactivity</h2>
            <p>Angular Signals provide a new way to handle reactive state management. Unlike RxJS observables, signals are simpler to understand and use, making your code more predictable and easier to debug.</p>

            <h3 class="h5 mt-4 mb-3">Why Signals Matter</h3>
            <ul class="mt-3">
                <li class="mb-2"><strong>Simpler Mental Model:</strong> No need to understand complex RxJS operators for basic state management</li>
                <li class="mb-2"><strong>Better Performance:</strong> Fine-grained reactivity means only affected components re-render</li>
                <li class="mb-2"><strong>Easier Debugging:</strong> Synchronous updates make it easier to trace state changes</li>
                <li class="mb-2"><strong>TypeScript Integration:</strong> Full type inference without manual type annotations</li>
            </ul>

            <div class="code-block bg-dark text-light p-4 rounded-3 my-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="text-muted small">Signals Example</span>
                </div>
<pre class="mb-0"><code>// Creating and using signals
const count = signal(0);
const doubleCount = computed(() => count() * 2);

// Updating signals
count.set(5);
count.update(value => value + 1);

// Effects for side effects
effect(() => {
  console.log('Count changed:', count());
  // This runs whenever count changes
});</code></pre>
            </div>

            <h2 class="h4 mt-5 mb-3">Improved Server-Side Rendering (SSR)</h2>
            <p>Angular Universal has been enhanced with better hydration support, making SSR applications faster and more SEO-friendly. The new hydration mechanism preserves DOM nodes created during server rendering, reducing time to interactive significantly.</p>

            <div class="row mt-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-success">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-rocket text-success me-2"></i>Faster TTI</h5>
                            <p class="card-text small">Time to Interactive reduced by up to 45% with the new hydration mechanism. Users can interact with the page faster.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-primary">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-search text-primary me-2"></i>Better SEO</h5>
                            <p class="card-text small">Full server-side rendering ensures search engines can crawl and index your content effectively.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="h4 mt-5 mb-3">Best Practices for Angular Development in 2025</h2>
            
            <ul class="list-unstyled mt-4">
                <li class="d-flex mb-3">
                    <span class="badge bg-primary rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">1</span>
                    <div>
                        <strong>Use Standalone Components</strong>
                        <p class="text-muted mb-0">Embrace the module-less architecture for cleaner, more maintainable code. Standalone components reduce complexity and improve tree-shaking.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-primary rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">2</span>
                    <div>
                        <strong>Adopt Signals for State Management</strong>
                        <p class="text-muted mb-0">Start migrating from RxJS to Signals for simpler state management. Use RxJS only for complex async operations like HTTP requests.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-primary rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">3</span>
                    <div>
                        <strong>Implement Lazy Loading</strong>
                        <p class="text-muted mb-0">Use route-level code splitting to reduce initial bundle size. Load features on-demand for better performance.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-primary rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">4</span>
                    <div>
                        <strong>Enable Strict Mode</strong>
                        <p class="text-muted mb-0">Use strict TypeScript checks for better code quality. Catch errors at compile time rather than runtime.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-primary rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">5</span>
                    <div>
                        <strong>Use OnPush Change Detection</strong>
                        <p class="text-muted mb-0">Optimize performance by using OnPush change detection strategy. This reduces unnecessary re-renders significantly.</p>
                    </div>
                </li>
            </ul>

            <h2 class="h4 mt-5 mb-3">Performance Optimization Tips</h2>
            <div class="row mt-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-warning">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-tachometer-alt text-warning me-2"></i>Bundle Optimization</h5>
                            <p class="card-text small">Use the Angular CLI's built-in optimization features. Enable production mode, tree-shaking, and ahead-of-time compilation for smaller bundles.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-info">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-image text-info me-2"></i>Image Optimization</h5>
                            <p class="card-text small">Use NgOptimizedImage directive for automatic image optimization. It handles lazy loading, responsive images, and modern formats.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="h4 mt-5 mb-3">Conclusion</h2>
            <p>Angular in 2025 is more powerful and developer-friendly than ever. By adopting these new features and best practices, you can build faster, more maintainable applications that scale with your business needs.</p>
            
            <p>The framework's commitment to stability, combined with continuous innovation, makes it an excellent choice for enterprise applications. Whether you're starting a new project or modernizing an existing one, Angular provides the tools and patterns you need to succeed.</p>

            <p>Start experimenting with standalone components and signals today, and you'll be well-prepared for the future of Angular development.</p>
        `,
        tags: ['Angular', 'TypeScript', 'Web Development', 'Frontend', 'JavaScript', 'Signals'],
        relatedPosts: ['react-best-practices-2025', 'future-of-ai-enterprise-software']
    },

    'python-ai-machine-learning-2025': {
        slug: 'python-ai-machine-learning-2025',
        title: 'Python for AI and Machine Learning: Complete Guide 2025',
        category: 'AI & ML',
        categorySlug: 'ai',
        badge: 'Featured',
        badgeColor: 'warning',
        date: 'December 2, 2025',
        readTime: '15 min read',
        views: '2.8k',
        author: {
            name: 'Sagar nakum',
            role: 'AI/ML Engineer',
            image: '/img/testimonial/1.jpg',
            bio: 'Sagar specializes in building AI/ML solutions using Python, TensorFlow, and PyTorch. He has deployed machine learning models for Fortune 500 companies and contributes to open-source ML projects.',
            social: { linkedin: '#', twitter: '#', github: '#' }
        },
        image: '/img/newblogimag/pythonforai.jpeg',
        excerpt: 'Master Python for AI and Machine Learning with the latest libraries, frameworks, and techniques for building intelligent applications.',
        content: `
            <p class="lead mb-4">Python remains the undisputed king of AI and Machine Learning development. Its rich ecosystem of libraries, ease of use, and strong community support make it the go-to language for data scientists and ML engineers worldwide.</p>

            <h2 class="h4 mt-5 mb-3">Why Python Dominates AI/ML</h2>
            <p>Python's dominance in the AI/ML space isn't accidental. The language offers a perfect balance of simplicity and power, making it accessible to beginners while providing the tools experts need for complex implementations.</p>

            <div class="highlight-box bg-light-subtle p-4 rounded-3 my-4 border-start border-primary border-4">
                <h5 class="mb-2"><i class="fas fa-chart-line text-success me-2"></i>Industry Statistics</h5>
                <p class="mb-0">According to the 2024 Stack Overflow Developer Survey, Python is used by 87% of data scientists and ML engineers. The language powers over 90% of machine learning projects in production environments worldwide.</p>
            </div>

            <h2 class="h4 mt-5 mb-3">Essential Python Libraries for AI/ML</h2>
            <p>The Python ecosystem offers powerful libraries that simplify complex AI/ML tasks:</p>

            <div class="row mt-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-primary">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-brain text-primary me-2"></i>TensorFlow 2.x</h5>
                            <p class="card-text small">Google's powerful deep learning framework with Keras integration. Perfect for production-ready ML models, neural networks, and large-scale distributed training.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-danger">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-fire text-danger me-2"></i>PyTorch</h5>
                            <p class="card-text small">Facebook's dynamic neural network library. Excellent for research, rapid prototyping, and intuitive debugging with eager execution mode.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-success">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-chart-bar text-success me-2"></i>Scikit-learn</h5>
                            <p class="card-text small">The Swiss Army knife for classical ML algorithms. Includes classification, regression, clustering, dimensionality reduction, and preprocessing tools.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-info">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-table text-info me-2"></i>Pandas & NumPy</h5>
                            <p class="card-text small">Essential for data manipulation and numerical computing. The foundation of any data science workflow with powerful array operations.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="h4 mt-5 mb-3">Building Your First ML Model</h2>
            <p>Let's walk through building a classification model with scikit-learn:</p>

            <div class="code-block bg-dark text-light p-4 rounded-3 my-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="text-muted small">Complete ML Pipeline Example</span>
                </div>
<pre class="mb-0"><code>import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Load and prepare data
data = pd.read_csv('customer_data.csv')
X = data.drop('churn', axis=1)
y = data['churn']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

# Evaluate
predictions = model.predict(X_test_scaled)
print(f"Accuracy: {accuracy_score(y_test, predictions):.2f}")
print(classification_report(y_test, predictions))</code></pre>
            </div>

            <h2 class="h4 mt-5 mb-3">Deep Learning with TensorFlow</h2>
            <p>For more complex problems, deep learning provides powerful solutions:</p>

            <div class="code-block bg-dark text-light p-4 rounded-3 my-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="text-muted small">Neural Network with TensorFlow/Keras</span>
                </div>
<pre class="mb-0"><code>import tensorflow as tf
from tensorflow.keras import layers, models

# Build a neural network
model = models.Sequential([
    layers.Dense(128, activation='relu', input_shape=(input_dim,)),
    layers.Dropout(0.3),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.3),
    layers.Dense(32, activation='relu'),
    layers.Dense(num_classes, activation='softmax')
])

# Compile model
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train with early stopping
early_stop = tf.keras.callbacks.EarlyStopping(
    monitor='val_loss', patience=5, restore_best_weights=True
)

history = model.fit(
    X_train, y_train,
    epochs=100,
    batch_size=32,
    validation_split=0.2,
    callbacks=[early_stop]
)</code></pre>
            </div>

            <h2 class="h4 mt-5 mb-3">Latest Trends in Python AI/ML (2025)</h2>
            
            <ul class="list-unstyled mt-4">
                <li class="d-flex mb-3">
                    <span class="badge bg-danger rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">1</span>
                    <div>
                        <strong>Large Language Models (LLMs)</strong>
                        <p class="text-muted mb-0">Using transformers and Hugging Face for NLP tasks. Fine-tuning pre-trained models like GPT, BERT, and LLaMA for domain-specific applications.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-danger rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">2</span>
                    <div>
                        <strong>AutoML & Automated Feature Engineering</strong>
                        <p class="text-muted mb-0">Libraries like Auto-sklearn, TPOT, and H2O AutoML automate model selection and hyperparameter tuning, making ML accessible to non-experts.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-danger rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">3</span>
                    <div>
                        <strong>MLOps & Model Deployment</strong>
                        <p class="text-muted mb-0">Streamlining ML workflows with MLflow, Kubeflow, and DVC. Implementing CI/CD for machine learning models with automated testing and monitoring.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-danger rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">4</span>
                    <div>
                        <strong>Edge AI & TinyML</strong>
                        <p class="text-muted mb-0">Deploying models on edge devices with TensorFlow Lite and ONNX Runtime. Running inference on IoT devices, mobile phones, and embedded systems.</p>
                    </div>
                </li>
            </ul>

            <h2 class="h4 mt-5 mb-3">Best Practices for Production ML</h2>
            <div class="row mt-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-warning">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-database text-warning me-2"></i>Data Quality</h5>
                            <p class="card-text small">Invest in data quality. Clean, well-labeled data is more important than complex algorithms. Implement data validation pipelines.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-success">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-vial text-success me-2"></i>Experiment Tracking</h5>
                            <p class="card-text small">Use tools like MLflow or Weights & Biases to track experiments, compare models, and reproduce results.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="h4 mt-5 mb-3">Conclusion</h2>
            <p>Python's dominance in AI/ML is set to continue in 2025 and beyond. By mastering these libraries and staying updated with the latest trends, you can build powerful intelligent applications that solve real-world problems.</p>
            
            <p>Whether you're building recommendation systems, computer vision applications, or natural language processing solutions, Python provides the tools and ecosystem you need to succeed. Start with the fundamentals, practice with real datasets, and gradually tackle more complex problems.</p>

            <p>The future of AI is being written in Python, and there's never been a better time to join this exciting field.</p>
        `,
        tags: ['Python', 'AI', 'Machine Learning', 'TensorFlow', 'PyTorch', 'Data Science', 'Deep Learning'],
        relatedPosts: ['future-of-ai-enterprise-software', 'machine-learning-business-applications']
    },

    'sql-server-optimization-2025': {
        slug: 'sql-server-optimization-2025',
        title: 'SQL Server Performance Optimization Techniques for 2025',
        category: 'Database',
        categorySlug: 'database',
        badge: 'Database',
        badgeColor: 'info',
        date: 'December 2, 2025',
        readTime: '12 min read',
        views: '1.5k',
        author: {
            name: 'Sagar Patel',
            role: 'Database Architect',
            image: '/img/testimonial/1.jpg',
            bio: 'Sagar is a database expert with deep knowledge of SQL Server, PostgreSQL, and cloud databases. He has optimized databases handling billions of transactions for enterprise clients.',
            social: { linkedin: '#', twitter: '#', github: '#' }
        },
        image: '/img/newblogimag/sqlserverperformance.jpeg',
        excerpt: 'Learn advanced SQL Server optimization techniques including indexing strategies, query tuning, and performance monitoring for enterprise applications.',
        content: `
            <p class="lead mb-4">SQL Server remains a cornerstone of enterprise data management. Optimizing its performance is crucial for applications that handle millions of transactions daily. This comprehensive guide covers proven techniques to maximize your SQL Server performance.</p>

            <h2 class="h4 mt-5 mb-3">Understanding SQL Server Performance</h2>
            <p>Database performance optimization is both an art and a science. It requires understanding how SQL Server processes queries, manages memory, and handles I/O operations. The key is to identify bottlenecks and address them systematically.</p>

            <div class="highlight-box bg-light-subtle p-4 rounded-3 my-4 border-start border-primary border-4">
                <h5 class="mb-2"><i class="fas fa-lightbulb text-warning me-2"></i>Performance Impact</h5>
                <p class="mb-0">Properly optimized databases can see 10x to 100x performance improvements. A query that takes 30 seconds can often be reduced to milliseconds with the right indexing and query optimization strategies.</p>
            </div>

            <h2 class="h4 mt-5 mb-3">Indexing Strategies</h2>
            <p>Proper indexing is the foundation of SQL Server performance. Understanding when and how to create indexes can dramatically improve query execution times.</p>

            <h3 class="h5 mt-4 mb-3">Clustered vs Non-Clustered Indexes</h3>
            <p>Choose your clustered index wisely—you only get one per table. It should be on columns that are frequently used in range queries and ORDER BY clauses. Non-clustered indexes are perfect for columns used in WHERE clauses and JOINs.</p>

            <div class="code-block bg-dark text-light p-4 rounded-3 my-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="text-muted small">Covering Index Example</span>
                </div>
<pre class="mb-0"><code>-- Create a covering index for better performance
CREATE NONCLUSTERED INDEX IX_Orders_CustomerDate
ON Orders (CustomerID, OrderDate)
INCLUDE (TotalAmount, Status, ShippingAddress)
WHERE Status = 'Active';

-- This index covers the following query completely
SELECT CustomerID, OrderDate, TotalAmount, Status
FROM Orders
WHERE CustomerID = @CustomerID
  AND Status = 'Active'
ORDER BY OrderDate DESC;</code></pre>
            </div>

            <h2 class="h4 mt-5 mb-3">Query Optimization Techniques</h2>
            
            <ul class="list-unstyled mt-4">
                <li class="d-flex mb-3">
                    <span class="badge bg-info rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">1</span>
                    <div>
                        <strong>Use SET STATISTICS IO ON</strong>
                        <p class="text-muted mb-0">Identify queries with high logical reads. High logical reads indicate missing indexes or inefficient query plans.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-info rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">2</span>
                    <div>
                        <strong>Avoid SELECT *</strong>
                        <p class="text-muted mb-0">Only retrieve columns you need. This reduces I/O and allows SQL Server to use covering indexes more effectively.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-info rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">3</span>
                    <div>
                        <strong>Use EXISTS Instead of IN</strong>
                        <p class="text-muted mb-0">For subqueries, EXISTS is often faster because it stops processing once a match is found.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-info rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">4</span>
                    <div>
                        <strong>Parameterize Queries</strong>
                        <p class="text-muted mb-0">Prevent SQL injection and improve plan caching. Parameterized queries allow SQL Server to reuse execution plans.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-info rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">5</span>
                    <div>
                        <strong>Avoid Functions on Indexed Columns</strong>
                        <p class="text-muted mb-0">Functions on columns in WHERE clauses prevent index usage. Use computed columns or rewrite queries instead.</p>
                    </div>
                </li>
            </ul>

            <h2 class="h4 mt-5 mb-3">Execution Plan Analysis</h2>
            <p>Understanding execution plans is crucial for query optimization. Look for these warning signs:</p>

            <div class="row mt-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-danger">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-exclamation-triangle text-danger me-2"></i>Table Scans</h5>
                            <p class="card-text small">Full table scans on large tables indicate missing indexes. Add appropriate indexes to convert scans to seeks.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-warning">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-sort text-warning me-2"></i>Sort Operations</h5>
                            <p class="card-text small">Expensive sort operations can be eliminated by creating indexes that match the ORDER BY clause.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-info">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-key text-info me-2"></i>Key Lookups</h5>
                            <p class="card-text small">Key lookups indicate the need for covering indexes. Include frequently accessed columns in the index.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-success">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-memory text-success me-2"></i>Memory Grants</h5>
                            <p class="card-text small">Large memory grants can cause queries to wait. Optimize queries to reduce memory requirements.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="h4 mt-5 mb-3">Performance Monitoring Tools</h2>
            <p>Regular monitoring helps identify issues before they become critical:</p>

            <div class="row mt-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-warning">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-tachometer-alt text-warning me-2"></i>Query Store</h5>
                            <p class="card-text small">Built-in feature to track query performance over time. Identify regressed queries and force good execution plans. Essential for troubleshooting performance issues.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-success">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-chart-line text-success me-2"></i>Extended Events</h5>
                            <p class="card-text small">Lightweight event-handling system for monitoring and troubleshooting. Capture detailed information about query execution with minimal overhead.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="h4 mt-5 mb-3">Conclusion</h2>
            <p>SQL Server optimization is an ongoing process. By implementing these techniques and continuously monitoring performance, you can ensure your database handles growing workloads efficiently.</p>
            
            <p>Remember that optimization is iterative—start with the biggest bottlenecks, measure the impact of changes, and continue refining. With proper indexing, query optimization, and monitoring, your SQL Server can handle enterprise-scale workloads with ease.</p>
        `,
        tags: ['SQL Server', 'Database', 'Performance', 'Optimization', 'Enterprise', 'Indexing'],
        relatedPosts: ['cloud-migration-strategies-2025', 'future-of-ai-enterprise-software']
    },

    'power-bi-business-intelligence-2025': {
        slug: 'power-bi-business-intelligence-2025',
        title: 'Power BI for Business Intelligence: Complete Guide 2025',
        category: 'Business Intelligence',
        categorySlug: 'trends',
        badge: 'Trending',
        badgeColor: 'danger',
        date: 'December 2, 2025',
        readTime: '14 min read',
        views: '2.1k',
        author: {
            name: 'Sagar Patel',
            role: 'BI Consultant',
            image: '/img/testimonial/1.jpg',
            bio: 'Sagar helps organizations transform data into actionable insights using Power BI and modern analytics tools. He has implemented BI solutions for companies across finance, healthcare, and retail sectors.',
            social: { linkedin: '#', twitter: '#', github: '#' }
        },
        image: '/img/newblogimag/powerbiforbusiness.jpeg',
        excerpt: 'Master Power BI for creating stunning dashboards, advanced DAX formulas, and data-driven decision making in your organization.',
        content: `
            <p class="lead mb-4">Power BI has become the leading business intelligence tool, empowering organizations to visualize data and share insights across the enterprise. In 2025, Power BI offers even more powerful features for data analysis and reporting.</p>

            <h2 class="h4 mt-5 mb-3">Why Power BI for Business Intelligence?</h2>
            <p>Power BI combines ease of use with enterprise-grade capabilities, making it accessible to business users while meeting IT requirements for security and governance.</p>

            <div class="highlight-box bg-light-subtle p-4 rounded-3 my-4 border-start border-primary border-4">
                <h5 class="mb-2"><i class="fas fa-trophy text-warning me-2"></i>Market Leadership</h5>
                <p class="mb-0">Power BI has been named a Leader in Gartner's Magic Quadrant for Analytics and BI Platforms for 16 consecutive years. Over 97% of Fortune 500 companies use Power BI for their analytics needs.</p>
            </div>

            <div class="row mt-4">
                <div class="col-md-4 mb-3">
                    <div class="card h-100 border-primary">
                        <div class="card-body text-center">
                            <i class="fas fa-plug fa-2x text-primary mb-3"></i>
                            <h5 class="card-title">100+ Connectors</h5>
                            <p class="card-text small">Connect to virtually any data source—databases, cloud services, APIs, Excel files, and more.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100 border-success">
                        <div class="card-body text-center">
                            <i class="fas fa-brain fa-2x text-success mb-3"></i>
                            <h5 class="card-title">AI-Powered Insights</h5>
                            <p class="card-text small">Automatic anomaly detection, trend analysis, and natural language Q&A for instant insights.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100 border-warning">
                        <div class="card-body text-center">
                            <i class="fas fa-mobile-alt fa-2x text-warning mb-3"></i>
                            <h5 class="card-title">Mobile Ready</h5>
                            <p class="card-text small">Access dashboards anywhere with native iOS and Android apps with offline support.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="h4 mt-5 mb-3">Essential DAX Formulas</h2>
            <p>DAX (Data Analysis Expressions) is the formula language that powers Power BI calculations. Master these essential formulas:</p>

            <div class="code-block bg-dark text-light p-4 rounded-3 my-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="text-muted small">Essential DAX Formulas</span>
                </div>
<pre class="mb-0"><code>// Year-over-Year Growth
YoY Growth = 
VAR CurrentYear = [Total Sales]
VAR PreviousYear = CALCULATE(
    [Total Sales], 
    SAMEPERIODLASTYEAR(Date[Date])
)
RETURN
DIVIDE(CurrentYear - PreviousYear, PreviousYear, 0)

// Running Total
Running Total = 
CALCULATE(
    [Total Sales],
    FILTER(
        ALL(Date),
        Date[Date] <= MAX(Date[Date])
    )
)

// Moving Average (3 months)
Moving Avg 3M = 
AVERAGEX(
    DATESINPERIOD(Date[Date], MAX(Date[Date]), -3, MONTH),
    [Total Sales]
)</code></pre>
            </div>

            <h2 class="h4 mt-5 mb-3">Dashboard Design Best Practices</h2>
            
            <ul class="list-unstyled mt-4">
                <li class="d-flex mb-3">
                    <span class="badge bg-danger rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">1</span>
                    <div>
                        <strong>Keep It Simple</strong>
                        <p class="text-muted mb-0">Focus on key metrics, avoid clutter. A dashboard should answer specific business questions at a glance.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-danger rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">2</span>
                    <div>
                        <strong>Use Consistent Colors</strong>
                        <p class="text-muted mb-0">Create a cohesive visual experience with a defined color palette. Use color meaningfully to highlight important data.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-danger rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">3</span>
                    <div>
                        <strong>Tell a Story</strong>
                        <p class="text-muted mb-0">Arrange visuals to guide the viewer's eye from overview to details. Use the Z-pattern or F-pattern layout.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-danger rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">4</span>
                    <div>
                        <strong>Enable Interactivity</strong>
                        <p class="text-muted mb-0">Use slicers, cross-filtering, and drill-through to let users explore data on their own terms.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-danger rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">5</span>
                    <div>
                        <strong>Optimize Performance</strong>
                        <p class="text-muted mb-0">Use aggregations, incremental refresh, and DirectQuery wisely to ensure fast load times.</p>
                    </div>
                </li>
            </ul>

            <h2 class="h4 mt-5 mb-3">New Features in 2025</h2>
            <div class="row mt-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-primary">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-robot text-primary me-2"></i>Copilot Integration</h5>
                            <p class="card-text small">Generate reports and DAX formulas using natural language. Ask questions like "Show me sales by region for last quarter" and get instant visualizations.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-success">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-database text-success me-2"></i>Enhanced Dataflows</h5>
                            <p class="card-text small">More powerful data transformation capabilities with improved performance and reusability across reports.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="h4 mt-5 mb-3">Conclusion</h2>
            <p>Power BI is essential for modern business intelligence. By mastering its features and following best practices, you can transform raw data into compelling visualizations that drive better business decisions.</p>
            
            <p>Start with simple reports, learn DAX progressively, and gradually build more sophisticated analytics solutions. The investment in learning Power BI pays dividends in better decision-making across your organization.</p>
        `,
        tags: ['Power BI', 'Business Intelligence', 'Data Analytics', 'DAX', 'Dashboards', 'Microsoft'],
        relatedPosts: ['machine-learning-business-applications', 'digital-transformation-roadmap']
    },

    'digital-marketing-analytics-2025': {
        slug: 'digital-marketing-analytics-2025',
        title: 'Digital Marketing Analytics: Data-Driven Strategies for 2025',
        category: 'Marketing',
        categorySlug: 'trends',
        badge: 'Marketing',
        badgeColor: 'success',
        date: 'December 2, 2025',
        readTime: '11 min read',
        views: '1.8k',
        author: {
            name: 'Sagar Patel',
            role: 'Marketing Analyst',
            image: '/img/testimonial/1.jpg',
            bio: 'Sagar combines marketing expertise with data analytics to help businesses optimize their digital marketing ROI. He has managed campaigns with budgets exceeding $10M annually.',
            social: { linkedin: '#', twitter: '#', github: '#' }
        },
        image: '/img/newblogimag/Digitaltransformation.jpeg',
        excerpt: 'Learn how to leverage data analytics, AI, and automation to create high-performing digital marketing campaigns that deliver measurable results.',
        content: `
            <p class="lead mb-4">Digital marketing in 2025 is all about data. Organizations that leverage analytics effectively can optimize campaigns, personalize customer experiences, and maximize ROI. This guide covers the essential strategies for data-driven marketing success.</p>

            <h2 class="h4 mt-5 mb-3">The Data-Driven Marketing Revolution</h2>
            <p>Gone are the days of gut-feeling marketing decisions. Today's successful marketers rely on data to guide every aspect of their strategy, from audience targeting to content creation to budget allocation.</p>

            <div class="highlight-box bg-light-subtle p-4 rounded-3 my-4 border-start border-primary border-4">
                <h5 class="mb-2"><i class="fas fa-chart-pie text-success me-2"></i>ROI Impact</h5>
                <p class="mb-0">Companies using data-driven marketing are 6x more likely to be profitable year-over-year. Data-driven campaigns see 20-30% higher conversion rates compared to traditional approaches.</p>
            </div>

            <h2 class="h4 mt-5 mb-3">The Modern Marketing Technology Stack</h2>
            <p>Building the right technology stack is crucial for data-driven marketing success:</p>

            <div class="row mt-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-primary">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-database text-primary me-2"></i>Customer Data Platform (CDP)</h5>
                            <p class="card-text small">Unify customer data from all touchpoints to create a single customer view. Essential for personalization at scale and cross-channel marketing.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-success">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-chart-pie text-success me-2"></i>Analytics Platform</h5>
                            <p class="card-text small">Google Analytics 4, Adobe Analytics, or Mixpanel for tracking user behavior, campaign performance, and conversion funnels.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-warning">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-robot text-warning me-2"></i>Marketing Automation</h5>
                            <p class="card-text small">HubSpot, Marketo, or Salesforce Marketing Cloud for automated campaigns, lead nurturing, and email marketing at scale.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-danger">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-bullseye text-danger me-2"></i>Attribution Tools</h5>
                            <p class="card-text small">Multi-touch attribution to understand which channels and campaigns drive conversions. Essential for budget optimization.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="h4 mt-5 mb-3">Key Marketing Metrics to Track</h2>
            <p>Focus on metrics that directly impact business outcomes:</p>

            <ul class="list-unstyled mt-4">
                <li class="d-flex mb-3">
                    <span class="badge bg-success rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">$</span>
                    <div>
                        <strong>Customer Acquisition Cost (CAC)</strong>
                        <p class="text-muted mb-0">Total cost to acquire a new customer, including all marketing and sales expenses. Lower CAC means more efficient marketing.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-success rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">♾</span>
                    <div>
                        <strong>Customer Lifetime Value (CLV)</strong>
                        <p class="text-muted mb-0">Total revenue expected from a customer over their entire relationship. Higher CLV justifies higher acquisition costs.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-success rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">%</span>
                    <div>
                        <strong>Return on Ad Spend (ROAS)</strong>
                        <p class="text-muted mb-0">Revenue generated per dollar spent on advertising. A ROAS of 4:1 means $4 revenue for every $1 spent.</p>
                    </div>
                </li>
                <li class="d-flex mb-3">
                    <span class="badge bg-success rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">→</span>
                    <div>
                        <strong>Conversion Rate</strong>
                        <p class="text-muted mb-0">Percentage of visitors who complete desired actions. Optimize landing pages and user experience to improve conversions.</p>
                    </div>
                </li>
            </ul>

            <div class="highlight-box bg-light-subtle p-4 rounded-3 my-4 border-start border-warning border-4">
                <h5 class="mb-2"><i class="fas fa-lightbulb text-warning me-2"></i>Pro Tip: The Golden Ratio</h5>
                <p class="mb-0">The CLV:CAC ratio is one of the most important metrics for sustainable growth. Aim for a ratio of at least 3:1—meaning each customer should generate 3x more revenue than it costs to acquire them.</p>
            </div>

            <h2 class="h4 mt-5 mb-3">AI in Marketing Analytics</h2>
            <p>AI is transforming how marketers analyze data and make decisions:</p>

            <div class="row mt-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-info">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-crystal-ball text-info me-2"></i>Predictive Analytics</h5>
                            <p class="card-text small">Forecast customer behavior, predict churn, and identify high-value prospects before they convert.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-primary">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-user-cog text-primary me-2"></i>Personalization at Scale</h5>
                            <p class="card-text small">Deliver individualized content, product recommendations, and offers to millions of customers simultaneously.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="h4 mt-5 mb-3">Conclusion</h2>
            <p>Data-driven marketing is no longer optional—it's essential for competitive success. By building the right technology stack, tracking meaningful metrics, and leveraging AI, you can create marketing campaigns that deliver measurable business results.</p>
            
            <p>Start by auditing your current analytics capabilities, identify gaps in your data collection, and gradually build toward a fully integrated marketing analytics ecosystem. The companies that master data-driven marketing will dominate their markets in 2025 and beyond.</p>
        `,
        tags: ['Digital Marketing', 'Analytics', 'Marketing Automation', 'AI', 'Business Growth', 'ROI'],
        relatedPosts: ['power-bi-business-intelligence-2025', 'machine-learning-business-applications']
    },

    'sql-server-ha-dr-complete-guide': {
        slug: 'sql-server-ha-dr-complete-guide',
        title: 'SQL Server High Availability & Disaster Recovery: A Complete Guide',
        category: 'Database',
        categorySlug: 'database',
        badge: 'Complete Guide',
        badgeColor: 'danger',
        date: 'December 3, 2025',
        readTime: '45 min read',
        views: '500',
        author: {
            name: 'DataEvol Team',
            role: 'Database Experts',
            image: '/img/testimonial/1.jpg',
            bio: 'DataEvol team specializes in SQL Server administration, high availability solutions, and disaster recovery planning for enterprise applications.',
            social: { linkedin: '#', twitter: '#', github: '#' }
        },
        image: '/img/newblogimag/sqlserverhigh.jpeg',
        excerpt: 'Master SQL Server High Availability and Disaster Recovery with this comprehensive guide covering Always On, Failover Clustering, Log Shipping, Replication, and best practices.',
        content: `
            <p class="lead mb-4">This comprehensive guide covers everything you need to know about SQL Server High Availability (HA) and Disaster Recovery (DR) solutions. Learn how to ensure your databases remain accessible and protected against failures.</p>

            <!-- Table of Contents -->
            <div class="toc-container bg-light-subtle p-4 rounded-3 my-4 border">
                <h4 class="mb-3"><i class="fas fa-list me-2"></i>Table of Contents</h4>
                <ul class="toc-list list-unstyled mb-0">
                    <li><a href="#introduction" class="text-decoration-none">1. Conceptual Understandings</a></li>
                    <li><a href="#replication" class="text-decoration-none">2. Replication</a></li>
                    <li><a href="#log-shipping" class="text-decoration-none">3. Log Shipping</a></li>
                    <li><a href="#mirroring" class="text-decoration-none">4. Mirroring</a></li>
                    <li><a href="#clustering" class="text-decoration-none">5. Clustering</a></li>
                    <li><a href="#always-on" class="text-decoration-none">6. AlwaysON Availability Groups</a></li>
                </ul>
            </div>

            <h2 class="h4 mt-5 mb-3" id="introduction">Conceptual Understandings</h2>
            <p class="lead"><strong>[High Availability in SQL Server]</strong></p>
            
            <p><strong>Target:</strong> All SQL Server Instances need to be kept 100% working and 24x7 running.</p>
            <p><strong>Utilizing:</strong> '<strong>Fault Tolerant</strong>' components and also needless other components.</p>

            <div class="highlight-box bg-light-subtle p-4 rounded-3 my-4 border-start border-primary border-4">
                <h5 class="mb-3"><i class="fas fa-tasks text-primary me-2"></i>Things To Do (to achieve High Availability):</h5>
                <ol class="mb-0">
                    <li>Replication</li>
                    <li>Log Shipping</li>
                    <li>Mirroring</li>
                    <li>Clustering</li>
                    <li>AlwaysON Availability Groups</li>
                </ol>
            </div>

            <h2 class="h4 mt-5 mb-3" id="replication">1. Replication</h2>
            
            <div class="table-responsive my-4">
                <table class="table table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th>Source Server</th>
                            <th>Destination Server</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Called as <strong>Publisher</strong></td>
                            <td>Called as <strong>Subscriber</strong></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center"><strong>Other Server</strong><br>Called as <strong>Distributor</strong></td>
                        </tr>
                    </tbody>
                </table>
                <p class="text-muted small"><em>Table 1) Schematic Work Scenario for Replication</em></p>
            </div>

            <p>Publisher SQL Server Instance (Pub) <strong>copies</strong> the databases to Subscriber SQL Server Instance (Sub) scheduled with SQL Server Agents with job processes.</p>
            <p>Distributor SQL Server Instance (Dis) duplicates Sub with normal sync operations.</p>
            <p>In a Server to Server interaction, anyone can be Sub or Pub depending on who is on receiving end and who is on sending end respectively at any point of time.</p>

            <h4 class="h6 mt-4 mb-3">Types or Varieties of Replication:</h4>
            <ul>
                <li>1.1 Snapshot Replication</li>
                <li>1.2 Transactional Replication</li>
                <li>1.3 Merge Replication</li>
                <li>1.4 Peer to Peer (P2P) Replication</li>
            </ul>

            <h3 class="h5 mt-4 mb-3">1.1 Snapshot Replication</h3>
            <p>Pub provides database snapshots to the Sub.</p>
            <p>In cases of multiple servers connected sequentially as given below.</p>
            <p>At any time,</p>
            
            <div class="text-center my-3">
                <code class="fs-5">S1 → S2 → S3 → S4</code>
            </div>
            
            <p class="text-muted small">***S1 is a Pub for S2 and S2 is Sub for S1</p>
            <p class="text-muted small">S2 is a Pub for S3 and S3 is Sub for S2</p>
            <p class="text-muted small">S3 is a Pub for S4 and S4 is Sub for S3</p>
            
            <p class="text-muted">'→' Indicates a Snapshot Replication is being carried out over the source (left of '→') to target (right of '→')</p>
            
            <p>The main benefit of the first interaction in this (S1 → S2) is that the snapshots replicated here becomes a source of lookup for minimal changes in further same snapshot replications ahead in sequence.</p>

            <h3 class="h5 mt-4 mb-3">1.2 Transactional Replication</h3>
            <p>Since we are bound to have some Transactions on SQL Servers at any moment of time, such transactions on Pub end need to be updated again on Sub end or 'Dis' end. For this Transaction Replications are carried out by <u>transactional</u> processes (SSA Jobs).</p>

            <h3 class="h5 mt-4 mb-3">1.3 Merge Replication</h3>
            <p>Moving further in time (i.e. after snapshot replication and <u>transactional</u> replication has just finished), at that instant, both System (Pub and Sub) are <strong>shadowed OFFLINE</strong>, and made <strong>ONLINE</strong> immediately with no other delay. And carry out a Synchronization Process between them.</p>

            <h3 class="h5 mt-4 mb-3">1.4 Peer to Peer (P2P) Replication</h3>
            <p>In a Peer to Peer replication, we need to consider Sequential interaction from above:</p>
            
            <div class="text-center my-3">
                <code class="fs-5">S1 → S2 → S3 → S4</code>
            </div>
            
            <p>The transaction that has been carried out on S2 from S1 need also be carried out over the S3 and S4 servers. This process if happens then, as soon S2 gets the <u>transactional</u> instructions same would be passed on to S3 and S4.</p>
            <p>Hence Peer to Peer Replication is carried out.</p>

            <h4 class="h6 mt-4 mb-3">REPLICATION AGENTS:</h4>
            <ul>
                <li>Replication Agents are standalone programs which generate snapshots, reads transaction logs, distributes data to Sub and reconciles changes.</li>
                <li>It can perform one-way (<u>transactional</u>, snapshot), bidirectional (<u>transactional</u>), and multi-master setups (merge and peer-to-peer).</li>
            </ul>

            <div class="table-responsive my-4">
                <table class="table table-bordered table-striped">
                    <thead class="table-warning">
                        <tr>
                            <th>Replication Type</th>
                            <th>Express, Web</th>
                            <th>Standard</th>
                            <th>Enterprise</th>
                            <th>Azure SQL Database</th>
                            <th>Azure SQL Managed Instance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Transactional</strong></td>
                            <td class="table-info">Subscriber Only</td>
                            <td class="table-info">Yes</td>
                            <td class="table-info">Yes</td>
                            <td class="table-warning">Subscriber Only</td>
                            <td class="table-info">Yes</td>
                        </tr>
                        <tr>
                            <td><strong>Snapshot</strong></td>
                            <td class="table-info">Subscriber Only</td>
                            <td class="table-info">Yes</td>
                            <td class="table-info">Yes</td>
                            <td class="table-warning">Subscriber Only</td>
                            <td class="table-info">Yes</td>
                        </tr>
                        <tr>
                            <td><strong>Merge</strong></td>
                            <td class="table-secondary">no</td>
                            <td class="table-info">Yes</td>
                            <td class="table-info">Yes</td>
                            <td class="table-secondary">no</td>
                            <td class="table-secondary">no</td>
                        </tr>
                        <tr>
                            <td><strong>Bi-Directional</strong></td>
                            <td class="table-secondary">no</td>
                            <td class="table-info">Yes</td>
                            <td class="table-info">Yes</td>
                            <td class="table-secondary">no</td>
                            <td class="table-info">Yes</td>
                        </tr>
                        <tr>
                            <td><strong>Peer-to-Peer</strong></td>
                            <td class="table-secondary">no</td>
                            <td class="table-secondary">no</td>
                            <td class="table-info">Yes</td>
                            <td class="table-secondary">no</td>
                            <td class="table-info">Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="h4 mt-5 mb-3" id="log-shipping">2. Log Shipping</h2>
            
            <div class="table-responsive my-4">
                <table class="table table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th>Source Server</th>
                            <th>Destination Server</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Called as <strong>Primary</strong></td>
                            <td>Called as <strong>Secondary</strong></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center"><strong>Other Server</strong></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center">Called as <strong>Monitor</strong>: This is Optional</td>
                        </tr>
                    </tbody>
                </table>
                <p class="text-muted small"><em>*Underlined term are for general understanding.</em></p>
                <p class="text-muted small"><em>*Bold terms are for Professional Communication.</em></p>
                <p class="text-muted small"><em>Table 2) Schematic Work Scenario for Log Shipping</em></p>
            </div>

            <p>Databases in the Secondary server are <strong>restored with no recovery</strong> using SSA and job schedules at a definite interval from Databases in Primary. Supports multiple secondary servers.</p>
            
            <p>Used in the smallest amounts of time for HA because when fail-over happens, the secondary database needs to be <strong>updated manually</strong> with un-restored log backups.</p>

            <h2 class="h4 mt-5 mb-3" id="mirroring">3. Mirroring</h2>
            
            <div class="table-responsive my-4">
                <table class="table table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th>Source Server</th>
                            <th>Destination Server</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Called as <strong>Principal</strong></td>
                            <td>Called as <strong>Mirror</strong></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center"><strong>Other Server</strong></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center">Called as <strong>Witness</strong>: This is Optional</td>
                        </tr>
                    </tbody>
                </table>
                <p class="text-muted small"><em>*Underlined term are for general understanding.</em></p>
                <p class="text-muted small"><em>*Bold terms are for Professional Communication.</em></p>
                <p class="text-muted small"><em>Table 3) Schematic Work Scenario for Mirroring</em></p>
            </div>

            <p>Databases in the Mirror server are <strong>restored with no recovery</strong> from the databases in principal server. Once this has completed, transactions are <strong>copied</strong> to the Mirror server. Fail-over gets finished in seconds. If the Principal server is down, the Mirror server acts as Principal server.</p>

            <h2 class="h4 mt-5 mb-3" id="clustering">4. Clustering</h2>
            
            <div class="table-responsive my-4">
                <table class="table table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th>Called as <strong>Active Node</strong></th>
                            <th>Called as <strong>Passive Node</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="2" class="text-center">"Prerequisites"</td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center">Windows Clustering setup with shared storage.</td>
                        </tr>
                    </tbody>
                </table>
                <p class="text-muted small"><em>*Underlined term are for general understanding.</em></p>
                <p class="text-muted small"><em>*Bold terms are for Professional Communication.</em></p>
                <p class="text-muted small"><em>Table 4) Schematic Understanding Scenario for SQL servers in Clusters.</em></p>
            </div>

            <p>Clusters involve a minimum of 2 servers.</p>
            <p>If one is down, others must take up the responsibility for same. This is no brainer for architectures with near 100% up-time. Assume a Server fails, then where the task on it was unable to complete, the same instructions need to be passed on to other servers in the same cluster, the task need not be necessarily restarted.</p>
            
            <p>There are 2 scenarios for setting up a 2 server cluster:</p>
            <ol>
                <li>Server 1 is Active and Server 2 is Active.<br>
                    Either one of them fails then the other shall <u>failover</u>.</li>
                <li>Server 1 is Active and Server 2 is Passive<br>
                    Active fails then Passive one become immediately Active and start working. Remember, in Passive Node we just need sql server services to start running and be in sync with data alike previously Active Node.</li>
            </ol>

            <h2 class="h4 mt-5 mb-3" id="always-on">5. AlwaysON Availability Groups</h2>
            
            <div class="table-responsive my-4">
                <table class="table table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th>Server/Node with sql server services up and running</th>
                            <th>Server/Node with sql server services down</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Called as <strong>Primary Replica</strong></td>
                            <td>Called as <strong>Secondary Replica</strong></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center">"Prerequisites"</td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center">Windows Clustering setup with shared storage.</td>
                        </tr>
                    </tbody>
                </table>
                <p class="text-muted small"><em>*Underlined term are for general understanding.</em></p>
                <p class="text-muted small"><em>*Bold terms are for Professional Communication.</em></p>
                <p class="text-muted small"><em>Table 5) Schematic Work Scenario for AlwaysON AG.</em></p>
            </div>

            <p>AlwaysON AG is a feature of MS SQL server 2012 and versions ahead.</p>
            <p>An Availability Group (AG) is a group of selected databases. The group is decided on the basis such that the group itself fails over together if a failure has occurred.</p>

            <p>It consists of one Primary Replica for read-write connections and <strong>upto 8 Secondary Replicas</strong>, which is used for read only connections for reporting purposes. To make the interaction between databases easier AG Listener can be created. It is a <strong>Virtual Name</strong> that consists of a Unique <strong>DNS</strong> name, <strong>Virtual IPs</strong>, and a <strong>TCP Port</strong> number, which provides a direct connection to the replica on that AG.</p>

            <h2 class="h4 mt-5 mb-3">Tutorial: Prepare SQL Server for Replication (Publisher, Distributor, Subscriber)</h2>
            
            <div class="highlight-box bg-info bg-opacity-10 p-4 rounded-3 my-4 border-start border-info border-4">
                <h5 class="mb-3"><strong>Applies to:</strong></h5>
                <p class="mb-0"><i class="fas fa-check-circle text-success me-2"></i>SQL Server</p>
            </div>

            <p>It's important to plan for security before you configure your replication topology. This tutorial shows you how to better secure a replication topology. It also shows you how to configure distribution, which is the first step in replicating data. You must complete this tutorial before any of the others.</p>

            <div class="alert alert-warning" role="alert">
                <h5 class="alert-heading"><i class="fas fa-exclamation-triangle me-2"></i>Note</h5>
                <p class="mb-0">To replicate data securely between servers, you should implement all of the recommendations in Replication security best practices.</p>
            </div>

            <p>This tutorial teaches you to prepare a server so that replication can run securely with least privileges.</p>

            <h3 class="h5 mt-4 mb-3">In this tutorial, you learn how to:</h3>
            <ul>
                <li>Create Windows accounts for replication.</li>
                <li>Prepare the snapshot folder.</li>
                <li>Configure distribution.</li>
            </ul>

            <h3 class="h5 mt-5 mb-3">Prerequisites</h3>
            <p>This tutorial is for users who are familiar with fundamental database operations, but who have limited exposure to replication.</p>

            <p>To complete this tutorial, you need SQL Server, SQL Server Management Studio (SSMS), and an AdventureWorks database:</p>

            <h4 class="h6 mt-4 mb-3">At the publisher server (source), install:</h4>
            <ul>
                <li>Any edition of SQL Server, except SQL Server Express or SQL Server Compact. These editions can't be replication publishers.</li>
                <li>The AdventureWorks 2025 sample database. To enhance security, the sample databases aren't installed by default.</li>
            </ul>

            <h4 class="h6 mt-4 mb-3">At the subscriber server (destination), install any edition of SQL Server, except:</h4>
            <ul>
                <li>At the subscriber server (destination), install any edition of SQL Server, except SQL Server Compact. SQL Server Compact can't be a subscriber in transactional replication.</li>
                <li>Install SQL Server Management Studio.</li>
                <li>Install SQL Server Developer edition.</li>
                <li>Download the AdventureWorks sample database. For instructions on restoring a database in SSMS, see Restore a Database Backup Using SSMS.</li>
            </ul>

            <div class="alert alert-info" role="alert">
                <h5 class="alert-heading"><i class="fas fa-info-circle me-2"></i>Note</h5>
                <ul class="mb-0">
                    <li>Replication isn't supported on SQL Server instances that are more than two versions apart. For more information, see Replication backward compatibility.</li>
                    <li>In SQL Server Management Studio, you must connect to the publisher and subscriber by using a login that is a member of the <strong>sysadmin</strong> fixed server role. For more information on this role, see Server-level roles.</li>
                </ul>
            </div>

            <p><strong>Estimated time to complete this tutorial: 30 minutes</strong></p>

            <h3 class="h5 mt-5 mb-3">Create Windows accounts for replication</h3>
            <p>In this section, you create Windows accounts to run replication agents. You create a separate Windows account on the local server for the following agents:</p>

            <div class="table-responsive my-4">
                <table class="table table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th>Agent</th>
                            <th>Location</th>
                            <th>Account name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Snapshot Agent</td>
                            <td>Publisher</td>
                            <td><code>&lt;machine_name&gt;\\repl_snapshot</code></td>
                        </tr>
                        <tr>
                            <td>Log Reader Agent</td>
                            <td>Publisher</td>
                            <td><code>&lt;machine_name&gt;\\repl_logreader</code></td>
                        </tr>
                        <tr>
                            <td>Distribution Agent</td>
                            <td>Publisher and subscriber</td>
                            <td><code>&lt;machine_name&gt;\\repl_distribution</code></td>
                        </tr>
                        <tr>
                            <td>Merge Agent</td>
                            <td>Publisher and subscriber</td>
                            <td><code>&lt;machine_name&gt;\\repl_merge</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="alert alert-warning" role="alert">
                <h5 class="alert-heading"><i class="fas fa-exclamation-triangle me-2"></i>Note</h5>
                <p class="mb-0">In the replication tutorials, the publisher and distributor share the same instance (NODE1\\SQL2016) of SQL Server. The subscriber instance (NODE2\\SQL2016) is remote. The publisher and subscriber might share the same instance of SQL Server, but it isn't a requirement. If the publisher and subscriber share the same instance, the steps that are used to create accounts at the subscriber aren't required.</p>
            </div>

            <h4 class="h6 mt-4 mb-3">Create local Windows accounts for replication agents at the publisher</h4>
            <ol>
                <li>At the publisher, open <strong>Computer Management</strong> from <strong>Administrative Tools</strong> in Control Panel.</li>
                <li>In <strong>System Tools</strong>, expand <strong>Local Users and Groups</strong>.</li>
                <li>Right-click <strong>Users</strong> and then select <strong>New User</strong>.</li>
                <li>Enter <strong>repl_snapshot</strong> in the <strong>User name</strong> box, provide the password and other relevant information, and then select <strong>Create</strong> to create the repl_snapshot account.</li>
                <li>Repeat the previous step to create the repl_logreader, repl_distribution, and repl_merge accounts.</li>
                <li>Select <strong>Close</strong>.</li>
            </ol>

            <h4 class="h6 mt-4 mb-3">Create local Windows accounts for replication agents at the subscriber</h4>
            <ol>
                <li>At the subscriber, open <strong>Computer Management</strong> from <strong>Administrative Tools</strong> in Control Panel.</li>
                <li>In <strong>System Tools</strong>, expand <strong>Local Users and Groups</strong>.</li>
                <li>Right-click <strong>Users</strong> and then select <strong>New User</strong>.</li>
                <li>Enter <strong>repl_distribution</strong> in the <strong>User name</strong> box, provide the password and other relevant information, and then select <strong>Create</strong> to create the repl_distribution account.</li>
                <li>Repeat the previous step to create the repl_merge account.</li>
                <li>Select <strong>Close</strong>.</li>
            </ol>

            <p>For more information, see Replication Agents overview.</p>

            <h3 class="h5 mt-5 mb-3">Prepare the snapshot folder</h3>
            
            <p>In this section, you configure the snapshot folder that's used to create and store the publication snapshot.</p>

            <h4 class="h6 mt-4 mb-3">Create a share for the snapshot folder and assign permissions</h4>
            
            <ol>
                <li>In File Explorer, browse to the SQL Server data folder. The default location is <code>C:\\Program Files\\Microsoft SQL Server\\MSSQL.X\\MSSQL\\Data</code>.</li>
                <li>Create a new folder named <strong>repldata</strong>.</li>
                <li>Right-click this folder and select <strong>Properties</strong>.</li>
                <li>On the <strong>Sharing</strong> tab in the <strong>repldata Properties</strong> dialog box, select <strong>Advanced Sharing</strong>.</li>
                <li>In the <strong>Advanced Sharing</strong> dialog box, select <strong>Share this Folder</strong>, and then select <strong>Permissions</strong>.</li>
            </ol>

            <div class="alert alert-info my-4" role="alert">
                <h5 class="alert-heading"><i class="fas fa-info-circle me-2"></i>Configuration Steps</h5>
                <p class="mb-2">Follow these steps in the Permissions dialog:</p>
                <ol class="mb-0">
                    <li>In the <strong>Permissions for repldata</strong> dialog box, select <strong>Add</strong>.</li>
                    <li>In the <strong>Select User, Computers, Service Account, or Groups</strong> box, type the name of the Snapshot Agent account that you created previously, as <code>&lt;Publisher_Machine_Name&gt;\\repl_snapshot</code>. Select <strong>Check Names</strong>, and then select <strong>OK</strong>.</li>
                    <li>Repeat step 6 to add the other two accounts that you created previously:
                        <ul>
                            <li><code>&lt;Publisher_Machine_Name&gt;\\repl_merge</code></li>
                            <li><code>&lt;Publisher_Machine_Name&gt;\\repl_distribution</code></li>
                        </ul>
                    </li>
                    <li>After you add the three accounts, assign the following permissions:
                        <ul>
                            <li><strong>repl_distribution</strong>: Read</li>
                            <li><strong>repl_merge</strong>: Read</li>
                            <li><strong>repl_snapshot</strong>: Full Control</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <div class="row my-4">
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-folder-open fa-3x text-primary mb-3"></i>
                            <h6 class="card-title">Step 1: Browse to Data Folder</h6>
                            <p class="card-text small">Navigate to SQL Server data directory</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-share-alt fa-3x text-success mb-3"></i>
                            <h6 class="card-title">Step 2: Share Folder</h6>
                            <p class="card-text small">Enable Advanced Sharing for repldata</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-user-shield fa-3x text-warning mb-3"></i>
                            <h6 class="card-title">Step 3: Set Permissions</h6>
                            <p class="card-text small">Add accounts and assign permissions</p>
                        </div>
                    </div>
                </div>
            </div>

            <ol start="7">
                <li>After your share permissions are configured correctly, select <strong>OK</strong> to close the <strong>Permissions for repldata</strong> dialog box. Select <strong>OK</strong> to close the <strong>Advanced Sharing</strong> dialog box.</li>
            </ol>

            <div class="highlight-box bg-light p-4 rounded-3 my-4 border">
                <h5 class="mb-3"><i class="fas fa-key text-danger me-2"></i>Permission Summary</h5>
                <div class="table-responsive">
                    <table class="table table-sm table-bordered mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>Account</th>
                                <th>Permission Level</th>
                                <th>Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>repl_snapshot</code></td>
                                <td><span class="badge bg-danger">Full Control</span></td>
                                <td>Creates and writes snapshot files</td>
                            </tr>
                            <tr>
                                <td><code>repl_distribution</code></td>
                                <td><span class="badge bg-info">Read</span></td>
                                <td>Reads snapshot files for distribution</td>
                            </tr>
                            <tr>
                                <td><code>repl_merge</code></td>
                                <td><span class="badge bg-info">Read</span></td>
                                <td>Reads snapshot files for merge replication</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h3 class="h5 mt-5 mb-3">Configure distribution</h3>
            
            <p>In this section, you configure distribution at the publisher and set the required permissions on the publication and distribution databases. If you already configured the distributor, you must disable publishing and distribution before you begin this section. Don't disable publishing and distribution if you must keep an existing replication topology, especially in production.</p>

            <div class="alert alert-info" role="alert">
                <p class="mb-0"><i class="fas fa-info-circle me-2"></i>Configuring a publisher with a remote distributor is outside the scope of this tutorial.</p>
            </div>

            <h4 class="h6 mt-4 mb-3">Configure distribution at the publisher</h4>
            
            <ol>
                <li>Connect to the publisher in SQL Server Management Studio, and then expand the server node.</li>
                <li>Right-click the <strong>Replication</strong> folder and select <strong>Configure Distribution</strong>.</li>
            </ol>

            <div class="alert alert-warning my-4" role="alert">
                <h5 class="alert-heading"><i class="fas fa-exclamation-triangle me-2"></i>Connection Note</h5>
                <p>If you connect to SQL Server by using <strong>localhost</strong> rather than the actual server name, you're prompted with a warning that SQL Server can't connect to <strong>localhost</strong> or <strong>IP Address</strong>. Select <strong>OK</strong> in the warning dialog box. In the <strong>Connect to Server</strong> dialog box, change <strong>Server name</strong> from <strong>localhost</strong> or <strong>IP Address</strong> to the name of your server. Then select <strong>Connect</strong>.</p>
                <p class="mb-0">There's currently a known issue with SQL Server Management Studio (SSMS) 18.0 (and later) where a warning message isn't displayed when connecting to the Distributor with the IP address, but is still invalid. The actual server name should be used when connecting to the Distributor.</p>
            </div>

            <p>The Distribution Configuration Wizard starts.</p>

            <ol start="3">
                <li>On the <strong>Distributor</strong> page, select <strong>&lt;ServerName&gt; will act as its own Distributor; SQL Server will create a distribution database and log</strong>. Then select <strong>Next</strong>.</li>
                <li>If the SQL Server Agent isn't running, on the <strong>SQL Server Agent Start</strong> page, select <strong>Yes, configure the SQL Server Agent service to start automatically</strong>. Select <strong>Next</strong>.</li>
                <li>Enter the path <code>\\&lt;Publisher_Machine_Name&gt;\\repldata</code> in the <strong>Snapshot folder</strong> box, and then select <strong>Next</strong>. This path should match what you saw previously under <strong>Network Path</strong> for your repldata properties folder after configuring your share properties.</li>
                <li>Accept the default values on the remaining pages of the wizard.</li>
                <li>Select <strong>Finish</strong> to enable distribution.</li>
            </ol>

            <div class="alert alert-danger my-4" role="alert">
                <h5 class="alert-heading"><i class="fas fa-times-circle me-2"></i>Common Error</h5>
                <p class="mb-2">You might see the following error when configuring the distributor. It's an indication that the account that was used to start the SQL Server Agent account isn't an administrator on the system. You either need to start the SQL Server Agent manually, grant those permissions to the existing account, or modify which account the SQL Server Agent is using.</p>
                <div class="bg-dark text-light p-3 rounded mt-2">
                    <p class="mb-0 small"><strong>Error Message:</strong> An error occurred configuring SQL Server Agent.</p>
                    <p class="mb-0 small">SQL Server blocked access to procedure 'dbo.sp_set_sqlagent_properties' of component 'Agent XPs' because this component is turned off as part of the security configuration for this server.</p>
                </div>
                <p class="mt-2 mb-0">If your SQL Server Management Studio instance is running with administrative rights, you can start the SQL Agent manually from within SSMS.</p>
            </div>

            <h4 class="h6 mt-4 mb-3">Set database permissions</h4>
            
            <ol start="8">
                <li>In SQL Server Management Studio, expand <strong>Security</strong>, right-click <strong>Logins</strong>, and then select <strong>New Login</strong>.</li>
                <li>On the <strong>General</strong> page, select <strong>Search</strong>. Enter <code>&lt;Publisher_Machine_Name&gt;\\repl_snapshot</code> in the <strong>Enter the object name to select</strong> box, select <strong>Check Names</strong>, and then select <strong>OK</strong>.</li>
            </ol>

            <div class="row my-4">
                <div class="col-md-6 mb-3">
                    <div class="card border-primary">
                        <div class="card-header bg-primary text-white">
                            <h6 class="mb-0"><i class="fas fa-user me-2"></i>Snapshot Agent</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-0"><strong>Account:</strong> <code>repl_snapshot</code></p>
                            <p class="card-text small mb-0"><strong>Permission:</strong> <span class="badge bg-danger">Full Control</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card border-info">
                        <div class="card-header bg-info text-white">
                            <h6 class="mb-0"><i class="fas fa-users me-2"></i>Distribution & Merge Agents</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-0"><strong>Accounts:</strong> <code>repl_distribution</code>, <code>repl_merge</code></p>
                            <p class="card-text small mb-0"><strong>Permission:</strong> <span class="badge bg-info">Read</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <ol start="10">
                <li>On the <strong>User Mapping</strong> page, select the <strong>distribution</strong> database and select <strong>db_owner</strong> for the <strong>Database role membership for: distribution</strong> list.</li>
                <li>On the <strong>Securables</strong> page, select <strong>Add</strong>. In the <strong>Add Objects</strong> window, select <strong>All objects of the types</strong>. Select <strong>OK</strong>. In the <strong>Select Objects</strong> page, select <strong>Databases</strong>. Select <strong>OK</strong>. In the <strong>Securables</strong> page, select <strong>distribution</strong>. In the <strong>Explicit</strong> permissions list, select <strong>Grant</strong> for the <strong>View database state</strong> permission. Select <strong>OK</strong>.</li>
                <li>Repeat steps 8 through 11 to create a login for <code>repl_logreader</code>, <code>repl_distribution</code>, and <code>repl_merge</code>.</li>
            </ol>

            <h4 class="h6 mt-4 mb-3">Verify that the following permissions are allowed:</h4>
            
            <ol start="8">
                <li>In the <strong>repldata Properties</strong> dialog box, select the <strong>Security</strong> tab and select <strong>Edit</strong>.</li>
                <li>In the <strong>Permissions for repldata</strong> dialog box, select <strong>Add</strong>. In the <strong>Select Users, Computers, Service Accounts, or Groups</strong> box, type the name of the Snapshot Agent account that you created previously, as <code>&lt;Publisher_Machine_Name&gt;\\repl_snapshot</code>. Select <strong>Check Names</strong>, and then select <strong>OK</strong>.</li>
                <li>Repeat the previous step to add permissions for the Distribution Agent as <code>&lt;Publisher_Machine_Name&gt;\\repl_distribution</code>, and for the Merge Agent as <code>&lt;Publisher_Machine_Name&gt;\\repl_merge</code>.</li>
            </ol>

            <ol start="12">
                <li>Select the <strong>Sharing</strong> tab again and note the <strong>Network Path</strong> for the share. You need this path later when you're configuring your snapshot folder.</li>
                <li>Select <strong>OK</strong> to close the <strong>repldata Properties</strong> dialog box.</li>
            </ol>

            <p>For more information, see Secure the Snapshot Folder.</p>

            <h2 class="h3 mt-5 mb-4">Tutorial: Configure replication between two fully connected servers (transactional)</h2>
            
            <div class="highlight-box bg-info bg-opacity-10 p-4 rounded-3 my-4 border-start border-info border-4">
                <h5 class="mb-3"><strong>Applies to:</strong></h5>
                <p class="mb-0"><i class="fas fa-check-circle text-success me-2"></i>SQL Server</p>
            </div>

            <p>Transactional replication is a good solution to the problem of moving data between continuously connected servers. By using the Replication Wizard, you can easily configure and administer a replication topology.</p>

            <p>This tutorial shows you how to configure a transactional replication topology for continuously connected servers. For more information about how transactional replication works, see the overview of transactional replication.</p>

            <h3 class="h5 mt-5 mb-3">What you will learn</h3>
            <p>This tutorial teaches you to publish data from one database to another by using transactional replication.</p>
            
            <p>In this tutorial, you will learn how to:</p>
            <ul>
                <li>Create a publisher via transactional replication.</li>
                <li>Create a subscriber for the transactional publisher.</li>
                <li>Validate the subscription and measure latency.</li>
            </ul>

            <h3 class="h5 mt-5 mb-3">Prerequisites</h3>
            <p>This tutorial is for users who are familiar with basic database operations, but who have limited experience with replication. Before you start this tutorial, you must complete Tutorial: Prepare SQL Server for replication.</p>

            <p>To complete this tutorial, you need SQL Server, SQL Server Management Studio (SSMS), and an AdventureWorks database:</p>

            <h4 class="h6 mt-4 mb-3">At the publisher server (source), install:</h4>
            <ul>
                <li>Any edition of SQL Server, except SQL Server Express or SQL Server Compact. These editions can't be replication publishers.</li>
                <li>The AdventureWorks 2025 sample database. To enhance security, the sample databases are not installed by default.</li>
            </ul>

            <h4 class="h6 mt-4 mb-3">At the subscriber server (destination):</h4>
            <ul>
                <li>Install any edition of SQL Server, except SQL Server Compact. SQL Server Compact cannot be a subscriber in transactional replication.</li>
                <li>Install SQL Server Management Studio.</li>
                <li>Install SQL Server 2017 Developer edition.</li>
            </ul>

            <div class="alert alert-info my-4" role="alert">
                <h5 class="alert-heading"><i class="fas fa-info-circle me-2"></i>Note</h5>
                <ul class="mb-0">
                    <li>Replication is not supported on SQL Server instances that are more than two versions apart.</li>
                    <li>In SQL Server Management Studio, you must connect to the publisher and subscriber by using a login that is a member of the <strong>sysadmin</strong> fixed server role. For more information on this role, see Server-level roles.</li>
                </ul>
            </div>

            <p><strong>Estimated time to complete this tutorial: 60 minutes</strong></p>

            <h3 class="h5 mt-5 mb-3">Configure the publisher for transactional replication</h3>
            <p>In this section, you create a transactional publication by using SQL Server Management Studio to publish a filtered subset of the Product table in the AdventureWorks 2025 sample database. You also add the SQL Server login used by the Distribution Agent to the publication access list (PAL).</p>

            <h4 class="h6 mt-4 mb-3">Create a publication and define articles</h4>
            
            <ol>
                <li>Connect to the publisher in SQL Server Management Studio, and then expand the server node.</li>
                <li>Right-click <strong>SQL Server Agent</strong> and select <strong>Start</strong>. The SQL Server Agent should be running before you create the publication. If this step does not start your agent, you'll need to do so manually from SQL Server Configuration Manager.</li>
                <li>Expand the <strong>Replication</strong> folder, right-click the <strong>Local Publications</strong> folder, and select <strong>New Publication</strong>. This step starts the New Publication Wizard.</li>
                <li>On the <strong>Publication Database</strong> page, select <strong>AdventureWorks2025</strong>, and then select <strong>Next</strong>.</li>
            </ol>

            <div class="alert alert-warning my-4" role="alert">
                <h5 class="alert-heading"><i class="fas fa-exclamation-triangle me-2"></i>Note</h5>
                <p class="mb-0">If the SQL Agent doesn't visibly start, right-click the SQL Server Agent in SSMS and select <strong>Refresh</strong>. If it's still in the stopped state, start it manually from SQL Server Configuration Manager.</p>
            </div>

            <h4 class="h6 mt-4 mb-3">Set database permissions</h4>
            
            <ol>
                <li>In SQL Server Management Studio, expand <strong>Security</strong>, right-click <strong>Logins</strong>, and then select <strong>New Login</strong>.</li>
                <li>On the <strong>General</strong> page, select <strong>Search</strong>. Enter <code>&lt;Publisher_Machine_Name&gt;\\repl_snapshot</code> in the <strong>Enter the object name to select</strong> box, select <strong>Check Names</strong>, and then select <strong>OK</strong>.</li>
                <li>On the <strong>User Mapping</strong> page, in the <strong>Users mapped to this login</strong> list, select both the <strong>distribution</strong> and <strong>AdventureWorks2025</strong> databases.</li>
            </ol>

            <p>In the database role membership list, select the <strong>db_owner</strong> role for the login for both databases.</p>

            <ol start="4">
                <li>Select <strong>OK</strong> to create the login.</li>
                <li>Repeat steps 1-4 to create a login for the other local accounts (repl_distribution, repl_logreader, and repl_merge). These logins must also be mapped to users who are members of the <strong>db_owner</strong> fixed database role in the <strong>distribution</strong> and <strong>AdventureWorks</strong> databases.</li>
            </ol>

            <div class="row my-4">
                <div class="col-12">
                    <div class="card border-success">
                        <div class="card-header bg-success text-white">
                            <h6 class="mb-0"><i class="fas fa-users me-2"></i>Replication Logins Created</h6>
                        </div>
                        <div class="card-body">
                            <ul class="mb-0">
                                <li><code>NODE1\\repl_snapshot</code></li>
                                <li><code>NODE1\\repl_distribution</code></li>
                                <li><code>NODE1\\repl_logreader</code></li>
                                <li><code>NODE1\\repl_merge</code></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <p>For more information, see Configure distribution and Replication Agent security model.</p>

            <h3 class="h5 mt-5 mb-3">Next step</h3>
            <p>You have successfully configured your publisher for transactional replication. Next, you'll create the publication and configure articles.</p>

            <ol start="5">
                <li>On the <strong>Publication Type</strong> page, select <strong>Transactional publication</strong>, and then select <strong>Next</strong>.</li>
                <li>On the <strong>Articles</strong> page, expand the <strong>Tables</strong> node and select the <strong>Product</strong> check box. Then expand <strong>Product</strong> and clear the check boxes next to <strong>ListPrice</strong> and <strong>StandardCost</strong>. Select <strong>Next</strong>.</li>
                <li>On the <strong>Filter Table Rows</strong> page, select <strong>Add</strong>.</li>
                <li>In the <strong>Add Filter</strong> dialog box, select the <strong>SafetyStockLevel</strong> column. Select the right arrow to add the column to the filter statement WHERE clause of the filter query. Then manually type in the WHERE clause modifier as follows:</li>
            </ol>

            <div class="code-block bg-dark text-light p-4 rounded-3 my-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="text-muted small">Filter WHERE Clause</span>
                </div>
<pre class="mb-0"><code>WHERE [SafetyStockLevel] < 500</code></pre>
            </div>

            <ol start="9">
                <li>Select <strong>OK</strong>, and then select <strong>Next</strong>.</li>
                <li>Select the <strong>Create a snapshot immediately and keep the snapshot available to initialize subscriptions</strong> check box, and select <strong>Next</strong>.</li>
            </ol>

            <div class="alert alert-info my-4" role="alert">
                <p class="mb-0"><i class="fas fa-info-circle me-2"></i>If you plan to change the snapshot properties, do not start the Snapshot Agent until after you change the properties in the publication property dialog box.</p>
            </div>

            <div class="row my-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-primary">
                        <div class="card-header bg-primary text-white">
                            <h6 class="mb-0"><i class="fas fa-database me-2"></i>Publication Database</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-0"><strong>Selected:</strong> AdventureWorks2025</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-success">
                        <div class="card-header bg-success text-white">
                            <h6 class="mb-0"><i class="fas fa-file-alt me-2"></i>Publication Type</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-0"><strong>Type:</strong> Transactional publication</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="highlight-box bg-light p-4 rounded-3 my-4 border">
                <h5 class="mb-3"><i class="fas fa-filter text-warning me-2"></i>Article Configuration</h5>
                <ul class="mb-0">
                    <li><strong>Table Selected:</strong> Product</li>
                    <li><strong>Columns Excluded:</strong> ListPrice, StandardCost</li>
                    <li><strong>Filter Applied:</strong> SafetyStockLevel < 500</li>
                </ul>
            </div>

            <ol start="11">
                <li>On the <strong>Agent Security</strong> page, clear the <strong>Use the security settings from the Snapshot Agent</strong> check box.</li>
            </ol>

            <p>Select <strong>Security Settings</strong> for the Snapshot Agent. Enter <code>&lt;Publisher_Machine_Name&gt;\\repl_snapshot</code> in the <strong>Process account</strong> box, supply the password for this account, and then select <strong>OK</strong>.</p>

            <div class="row my-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-info">
                        <div class="card-header bg-info text-white">
                            <h6 class="mb-0"><i class="fas fa-user-shield me-2"></i>Snapshot Agent Security</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-2"><strong>Process account:</strong></p>
                            <code>&lt;Publisher_Machine_Name&gt;\\repl_snapshot</code>
                            <p class="card-text small mt-2 mb-0"><strong>Connect to Publisher:</strong> By impersonating the process account</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-warning">
                        <div class="card-header bg-warning text-dark">
                            <h6 class="mb-0"><i class="fas fa-book-reader me-2"></i>Log Reader Agent Security</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-2"><strong>Process account:</strong></p>
                            <code>&lt;Publisher_Machine_Name&gt;\\repl_logreader</code>
                            <p class="card-text small mt-2 mb-0"><strong>Connect to Publisher:</strong> By impersonating the process account</p>
                        </div>
                    </div>
                </div>
            </div>

            <ol start="12">
                <li>Repeat the previous step to set <code>&lt;Publisher_Machine_Name&gt;\\repl_logreader</code> as the process account for the Log Reader Agent. Then select <strong>OK</strong>.</li>
                <li>On the <strong>Complete the Wizard</strong> page, type <strong>AdvWorksProductTrans</strong> in the <strong>Publication name</strong> box, and select <strong>Finish</strong>.</li>
            </ol>

            <div class="highlight-box bg-success bg-opacity-10 p-4 rounded-3 my-4 border-start border-success border-4">
                <h5 class="mb-3"><i class="fas fa-check-circle text-success me-2"></i>Complete the Wizard - Publication Summary</h5>
                <p class="mb-2"><strong>Publication name:</strong> AdvWorksProductTrans</p>
                <p class="mb-2"><strong>Click Finish to perform the following actions:</strong></p>
                <ul class="mb-0">
                    <li>Create the publication.</li>
                </ul>
                <p class="mt-3 mb-2"><strong>A publication will be created with the following options:</strong></p>
                <ul class="mb-0">
                    <li>Create a transactional publication from database 'AdventureWorks2012'.</li>
                    <li>The Snapshot Agent process will run under the 'NODE1\\repl_snapshot' account.</li>
                    <li>The Log Reader Agent process will run under the 'NODE1\\repl_logreader' account.</li>
                    <li>The publication compatibility level will support Subscribers that are servers running SQL Server 2008 or later.</li>
                    <li>Publish the following tables as articles:
                        <ul>
                            <li>'Product'</li>
                        </ul>
                    </li>
                    <li>Exclude columns from the following tables:
                        <ul>
                            <li>'Product'</li>
                        </ul>
                    </li>
                    <li>Exclude rows of the following tables that do not meet the criteria of their filters:
                        <ul>
                            <li>'Product'</li>
                        </ul>
                    </li>
                    <li>Create a snapshot of this publication immediately after the publication is created.</li>
                </ul>
            </div>

            <ol start="14">
                <li>After the publication is created, select <strong>Close</strong> to complete the wizard.</li>
            </ol>

            <div class="alert alert-warning my-4" role="alert">
                <h5 class="alert-heading"><i class="fas fa-exclamation-triangle me-2"></i>Possible Error</h5>
                <p>You might encounter the following error if your SQL Server Agent is not running when you try to create the publication. This error indicates that your publication was created successfully but your Snapshot Agent was unable to start. If this happens, you'll need to start the SQL Server Agent, and then manually start the Snapshot Agent. The next section gives instructions.</p>
                <div class="bg-dark text-light p-3 rounded mt-2">
                    <p class="mb-1 small"><strong>SQL Server could not start the Snapshot Agent.</strong></p>
                    <p class="mb-1 small"><strong>Additional information:</strong></p>
                    <ul class="mb-0 small">
                        <li>An exception occurred while executing a Transact-SQL statement or batch. (Microsoft.SqlServer.ConnectionInfo)</li>
                        <li>SQLServerAgent is not currently running so it cannot be notified of this action. Changed database context to 'AdventureWorks2012'. (Microsoft SQL Server, Error: 22022)</li>
                    </ul>
                </div>
            </div>

            <div class="highlight-box bg-light p-4 rounded-3 my-4 border">
                <h5 class="mb-3"><i class="fas fa-tasks text-primary me-2"></i>Creating Publication - Status</h5>
                <div class="table-responsive">
                    <table class="table table-sm table-bordered mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>Action</th>
                                <th>Status</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><i class="fas fa-check-circle text-success me-2"></i>Creating Publication 'AdvWorksProductTrans'</td>
                                <td><span class="badge bg-success">Success</span></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><i class="fas fa-check-circle text-success me-2"></i>Adding article 1 of 1</td>
                                <td><span class="badge bg-success">Success</span></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><i class="fas fa-exclamation-triangle text-warning me-2"></i>Starting the Snapshot Agent</td>
                                <td><span class="badge bg-warning text-dark">Warning</span></td>
                                <td>SQL Server could not...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h4 class="h6 mt-5 mb-3">View the status of snapshot generation</h4>
            
            <ol>
                <li>Connect to the publisher in SQL Server Management Studio, expand the server node, and then expand the <strong>Replication</strong> folder.</li>
                <li>In the <strong>Local Publications</strong> folder, right-click <strong>AdvWorksProductTrans</strong>, and then select <strong>View Snapshot Agent Status</strong>.</li>
                <li>The current status of the Snapshot Agent job for the publication appears. Verify that the snapshot job has succeeded before you continue to the next section.</li>
            </ol>

            <p>If your SQL Server Agent was not running when you created the publication, you'll see that the Snapshot Agent was never run when you check the Snapshot Agent status for your publication. If that's the case, select <strong>Start</strong> to start your Snapshot Agent.</p>

            <div class="row my-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-danger">
                        <div class="card-header bg-danger text-white">
                            <h6 class="mb-0"><i class="fas fa-stop-circle me-2"></i>Before Starting</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-1"><strong>Agent type:</strong> Snapshot Agent</p>
                            <p class="card-text small mb-1"><strong>Publication:</strong> AdvWorksProductTrans</p>
                            <p class="card-text small mb-1"><strong>Publication database:</strong> [AdventureWorks2012]</p>
                            <p class="card-text small mb-1"><strong>Last status message:</strong></p>
                            <p class="card-text small text-danger mb-0">The agent has never been run.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-success">
                        <div class="card-header bg-success text-white">
                            <h6 class="mb-0"><i class="fas fa-check-circle me-2"></i>After Starting</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-1"><strong>Agent type:</strong> Snapshot Agent</p>
                            <p class="card-text small mb-1"><strong>Publication:</strong> AdvWorksProductTrans</p>
                            <p class="card-text small mb-1"><strong>Publication database:</strong> [AdventureWorks2012]</p>
                            <p class="card-text small mb-1"><strong>Duration:</strong> 00:00:01</p>
                            <p class="card-text small mb-1"><strong>Last status message:</strong></p>
                            <p class="card-text small text-success mb-0">[100%] A snapshot of 1 article(s) was generated.</p>
                        </div>
                    </div>
                </div>
            </div>

            <p>If you see an error here, see Troubleshooting Snapshot Agent error.</p>

            <h4 class="h6 mt-5 mb-3">Add the Distribution Agent login to the PAL</h4>
            
            <ol>
                <li>Connect to the publisher in SQL Server Management Studio, expand the server node, and then expand the <strong>Replication</strong> folder.</li>
                <li>In the <strong>Local Publications</strong> folder, right-click <strong>AdvWorksProductTrans</strong>, and then select <strong>Properties</strong>. The <strong>Publication Properties</strong> dialog box appears.
                    <ul>
                        <li>a. Select the <strong>Publication Access List</strong> page, and select <strong>Add</strong>.</li>
                        <li>b. In the <strong>Add Publication Access</strong> dialog box, select <code>&lt;Publisher_Machine_Name&gt;\\repl_distribution</code>, and select <strong>OK</strong>.</li>
                    </ul>
                </li>
            </ol>

            <div class="highlight-box bg-info bg-opacity-10 p-4 rounded-3 my-4 border">
                <h5 class="mb-3"><i class="fas fa-list text-info me-2"></i>Publication Access List (PAL)</h5>
                <p class="mb-2">The publication access list specifies the logins with permission to create and synchronize subscriptions.</p>
                <div class="table-responsive">
                    <table class="table table-sm table-bordered mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>Login name</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>sa</td>
                                <td>Standard</td>
                            </tr>
                            <tr>
                                <td>SQLREPRO\\Administrator</td>
                                <td>Windows user</td>
                            </tr>
                            <tr>
                                <td>NT SERVICE\\Winmgmt</td>
                                <td>Windows user</td>
                            </tr>
                            <tr>
                                <td>NT SERVICE\\SQLWriter</td>
                                <td>Windows user</td>
                            </tr>
                            <tr>
                                <td>NT Service\\MSSQL$SQL2...</td>
                                <td>Windows user</td>
                            </tr>
                            <tr>
                                <td>NT SERVICE\\SQLAgent$...</td>
                                <td>Windows user</td>
                            </tr>
                            <tr>
                                <td>distributor_admin</td>
                                <td>Standard</td>
                            </tr>
                            <tr class="table-success">
                                <td><strong>NODE1\\repl_distribution</strong></td>
                                <td>Windows user</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <p>For more information, see Replication programming concepts.</p>

            <h3 class="h5 mt-5 mb-3">Create a subscription to the transactional publication</h3>
            <p>In this section, you add a subscriber to the publication that you previously created. This tutorial uses a remote subscriber (NODE2\\SQL2016), but you can also add a subscription locally to the publisher.</p>

            <h4 class="h6 mt-4 mb-3">Create the subscription</h4>
            
            <ol>
                <li>Connect to the publisher in SQL Server Management Studio, expand the server node, and then expand the <strong>Replication</strong> folder.</li>
                <li>In the <strong>Local Publications</strong> folder, right-click the <strong>AdvWorksProductTrans</strong> publication, and then select <strong>New Subscriptions</strong>. The New Subscription Wizard starts.</li>
                <li>On the <strong>Publication</strong> page, select <strong>AdvWorksProductTrans</strong>, and then select <strong>Next</strong>.</li>
            </ol>

            <div class="highlight-box bg-light p-4 rounded-3 my-4 border">
                <h5 class="mb-3"><i class="fas fa-book text-primary me-2"></i>Publication Selection</h5>
                <p class="mb-2"><strong>Publisher:</strong> NODE1\\SQL2016</p>
                <p class="mb-0"><strong>Databases and publications:</strong></p>
                <ul class="mb-0">
                    <li>AdventureWorks2012
                        <ul>
                            <li><strong>AdvWorksProductTrans</strong> (selected)</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <ol start="4">
                <li>On the <strong>Distribution Agent Location</strong> page, select <strong>Run all agents at the Distributor, NODE1\\SQL2016 (push subscriptions)</strong>, and then select <strong>Next</strong>. For more information on pull and push subscriptions, see Subscribe to publications.</li>
            </ol>

            <div class="alert alert-info my-4" role="alert">
                <h5 class="alert-heading"><i class="fas fa-info-circle me-2"></i>Distribution Agent Location Options</h5>
                <ul class="mb-0">
                    <li><strong>Run all agents at the Distributor (push subscriptions):</strong> This option makes it easier to administer the synchronization of subscriptions centrally.</li>
                    <li><strong>Run each agent at its Subscriber (pull subscriptions):</strong> This option reduces the processing overhead at the Distributor and lets each Subscriber administer the synchronization of its subscription.</li>
                </ul>
                <p class="mt-2 mb-0 small">Run the wizard more than once if you want some agents to run at the Distributor and some to run at Subscribers.</p>
            </div>

            <ol start="5">
                <li>On the <strong>Subscribers</strong> page, if the name of the subscriber instance is not displayed, select <strong>Add Subscriber</strong>, and then select <strong>Add SQL Server Subscriber</strong> from the drop-down list. This step opens the <strong>Connect to Server</strong> dialog box. Enter the subscriber instance name and then select <strong>Connect</strong>.</li>
            </ol>

            <p>After the subscriber has been added, select the check box next to the instance name of your subscriber. Then select <strong>New Database</strong> under <strong>Subscription Database</strong>.</p>

            <ol start="6">
                <li>The <strong>New Database</strong> dialog box appears. Enter <strong>ProductReplica</strong> in the <strong>Database name</strong> box, select <strong>OK</strong>, and then select <strong>Next</strong>.</li>
            </ol>

            <div class="table-responsive my-4">
                <table class="table table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th>Subscriber</th>
                            <th>Subscription Database</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" disabled> NODE1\\SQL2016</td>
                            <td></td>
                        </tr>
                        <tr class="table-success">
                            <td><input type="checkbox" checked disabled> <strong>NODE2\\SQL2016</strong></td>
                            <td><strong>ProductReplica</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ol start="7">
                <li>On the <strong>Distribution Agent Security</strong> page, select the ellipsis (<strong>...</strong>) button. Enter <code>&lt;Publisher_Machine_Name&gt;\\repl_distribution</code> in the <strong>Process account</strong> box, enter the password for this account, select <strong>OK</strong>, and then select <strong>Next</strong>.</li>
                <li>Select <strong>Finish</strong> to accept the default values on the remaining pages and complete the wizard.</li>
            </ol>

            <div class="row my-4">
                <div class="col-12">
                    <div class="card border-primary">
                        <div class="card-header bg-primary text-white">
                            <h6 class="mb-0"><i class="fas fa-user-cog me-2"></i>Distribution Agent Security</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-2"><strong>Process account:</strong> <code>&lt;Publisher_Machine_Name&gt;\\repl_distribution</code></p>
                            <p class="card-text small mb-2"><strong>Connect to the Distributor:</strong> By impersonating the process account</p>
                            <p class="card-text small mb-0"><strong>Connect to the Subscriber:</strong> By impersonating the process account</p>
                        </div>
                    </div>
                </div>
            </div>

            <h4 class="h6 mt-5 mb-3">Set database permissions at the subscriber</h4>
            
            <ol>
                <li>Connect to the subscriber in SQL Server Management Studio. Expand <strong>Security</strong>, right-click <strong>Logins</strong>, and then select <strong>New Login</strong>.
                    <ul>
                        <li>a. On the <strong>General</strong> page, under <strong>Login Name</strong>, select <strong>Search</strong> and add the login for <code>&lt;Subscriber_Machine_Name&gt;\\repl_distribution</code>.</li>
                        <li>b. On the <strong>User Mappings</strong> page, grant the login <strong>db_owner</strong> membership for the <strong>ProductReplica</strong> database.</li>
                    </ul>
                </li>
            </ol>

            <div class="highlight-box bg-success bg-opacity-10 p-4 rounded-3 my-4 border-start border-success border-4">
                <h5 class="mb-3"><i class="fas fa-database text-success me-2"></i>User Mapping Configuration</h5>
                <p class="mb-2"><strong>Login:</strong> NODE2\\repl_distribution</p>
                <p class="mb-2"><strong>Users mapped to this login:</strong></p>
                <div class="table-responsive">
                    <table class="table table-sm table-bordered mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>Map</th>
                                <th>Database</th>
                                <th>User</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-success">
                                <td><input type="checkbox" checked disabled></td>
                                <td><strong>ProductReplica</strong></td>
                                <td>NODE2\\repl_distribution</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="mt-3 mb-0"><strong>Database role membership for: ProductReplica</strong></p>
                <ul class="mb-0">
                    <li><input type="checkbox" checked disabled> <strong>db_owner</strong></li>
                    <li><input type="checkbox" checked disabled> public</li>
                </ul>
            </div>

            <ol start="2">
                <li>Select <strong>OK</strong> to close the New Login dialog box.</li>
            </ol>

            <h4 class="h6 mt-5 mb-3">View the synchronization status of the subscription</h4>
            
            <ol>
                <li>Connect to the publisher in SQL Server Management Studio. Expand the server node, and then expand the <strong>Replication</strong> folder.</li>
                <li>In the <strong>Local Publications</strong> folder, expand the <strong>AdvWorksProductTrans</strong> publication, right-click the subscription in the <strong>ProductReplica</strong> database, and then select <strong>View Synchronization Status</strong>. The current synchronization status of the subscription appears.</li>
                <li>If the subscription is not visible under <strong>AdvWorksProductTrans</strong>, select the F5 key to refresh the list.</li>
            </ol>

            <div class="row my-4">
                <div class="col-12">
                    <div class="card border-info">
                        <div class="card-header bg-info text-white">
                            <h6 class="mb-0"><i class="fas fa-sync me-2"></i>View Synchronization Status</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-2"><strong>Subscription:</strong> NODE2\\SQL2016:ProductReplica</p>
                            <p class="card-text small mb-2"><strong>Publication:</strong> AdvWorksProductTrans</p>
                            <p class="card-text small mb-2"><strong>Publication Database:</strong> NODE1\\SQL2016:[AdventureWorks2012]</p>
                            <p class="card-text small mb-2"><strong>Last Sync:</strong> 4/3/2018 12:36:48 PM</p>
                            <p class="card-text small mb-0"><strong>Status:</strong> <span class="text-success">No replicated transactions are available</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <p>For more information, see:</p>

            <h3 class="h5 mt-5 mb-3">Measure replication latency</h3>
            <p>In this section, you use tracer tokens to verify that changes are being replicated to the subscriber and to determine latency. Latency is the time it takes for a change made at the publisher to appear to the subscriber.</p>

            <ol>
                <li>Connect to the publisher in SQL Server Management Studio. Expand the server node, right-click the <strong>Replication</strong> folder, and then select <strong>Launch Replication Monitor</strong>.</li>
                <li>Expand a publisher group in the left pane, expand the publisher instance, and then select the <strong>AdvWorksProductTrans</strong> publication.
                    <ul>
                        <li>a. Select the <strong>Tracer Tokens</strong> tab.</li>
                        <li>b. Select <strong>Insert Tracer</strong>.</li>
                        <li>c. View elapsed time for the tracer token in the following columns: <strong>Publisher to Distributor</strong>, <strong>Distributor to Subscriber</strong>, <strong>Total Latency</strong>. A value of <strong>Pending</strong> indicates that the token has not reached a specified point.</li>
                    </ul>
                </li>
            </ol>

            <div class="highlight-box bg-light p-4 rounded-3 my-4 border">
                <h5 class="mb-3"><i class="fas fa-stopwatch text-warning me-2"></i>Replication Monitor - Tracer Tokens</h5>
                <p class="mb-2"><strong>Publication:</strong> AdvWorksProductTrans</p>
                <p class="mb-3">Tracer Tokens measure latency from Publisher to Distributor, Distributor to Subscriber, and the total latency. Click here for more information.</p>
                
                <div class="table-responsive">
                    <table class="table table-sm table-bordered mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>Tracer Token</th>
                                <th>Time Inserted</th>
                                <th>Publisher to Distributor</th>
                                <th>Distributor to Subscriber</th>
                                <th>Total Latency</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Subscription: NODE2\\SQL2016:ProductReplica</td>
                                <td>4/3/2018 12:36:48 PM</td>
                                <td>00:00:00</td>
                                <td>00:00:01</td>
                                <td>00:00:01</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="alert alert-success my-4" role="alert">
                <h5 class="alert-heading"><i class="fas fa-check-circle me-2"></i>Congratulations!</h5>
                <p class="mb-0">You have successfully configured transactional replication between two fully connected servers. The publication is now replicating data from the publisher to the subscriber, and you can measure the latency using tracer tokens.</p>
            </div>

            <h3 class="h5 mt-5 mb-3">Next Steps</h3>
            <p>Now that you have successfully configured transactional replication, you can:</p>
            <ul>
                <li>Monitor replication performance using Replication Monitor</li>
                <li>Test failover scenarios</li>
                <li>Configure additional subscribers</li>
                <li>Implement security best practices</li>
                <li>Optimize replication performance</li>
            </ul>

            <h2 class="h3 mt-5 mb-4">Conclusion</h2>
            <p>This comprehensive guide has covered the essential aspects of SQL Server High Availability and Disaster Recovery solutions. From basic concepts to advanced implementation techniques, you now have the knowledge to:</p>

            <ul>
                <li><strong>Understand HA & DR concepts</strong> - The fundamental differences and use cases</li>
                <li><strong>Implement Replication</strong> - Snapshot, Transactional, Merge, and Peer-to-Peer</li>
                <li><strong>Configure Log Shipping</strong> - For disaster recovery scenarios</li>
                <li><strong>Set up Mirroring</strong> - For high availability with automatic failover</li>
                <li><strong>Deploy Clustering</strong> - For hardware-level fault tolerance</li>
                <li><strong>Implement AlwaysOn Availability Groups</strong> - The most advanced HA solution</li>
            </ul>

            <div class="highlight-box bg-primary bg-opacity-10 p-4 rounded-3 my-4 border-start border-primary border-4">
                <h5 class="mb-3"><i class="fas fa-lightbulb text-primary me-2"></i>Key Takeaways</h5>
                <ul class="mb-0">
                    <li>Choose the right HA/DR solution based on your RTO and RPO requirements</li>
                    <li>Always test your disaster recovery procedures regularly</li>
                    <li>Monitor replication performance and latency continuously</li>
                    <li>Implement proper security measures for all replication agents</li>
                    <li>Document your HA/DR procedures and keep them updated</li>
                </ul>
            </div>

            <p>Remember that high availability and disaster recovery are not one-time implementations but ongoing processes that require regular maintenance, monitoring, and testing. Stay updated with the latest SQL Server features and best practices to ensure your databases remain highly available and protected against various failure scenarios.</p>

            <p>For additional resources and advanced topics, refer to the official Microsoft SQL Server documentation and consider implementing a comprehensive monitoring solution to track the health and performance of your HA/DR infrastructure.</p>

            <h2 class="h3 mt-5 mb-4">Tutorial: Configure replication between a server and mobile clients (merge)</h2>
            
            <div class="highlight-box bg-info bg-opacity-10 p-4 rounded-3 my-4 border-start border-info border-4">
                <h5 class="mb-3"><strong>Applies to:</strong></h5>
                <p class="mb-0"><i class="fas fa-check-circle text-success me-2"></i>SQL Server</p>
            </div>

            <p>Merge replication is a good solution to the problem of moving data between a central server and mobile clients that are only occasionally connected. By using the replication wizards, you can easily configure and administer a merge replication topology.</p>

            <p>This tutorial shows you how to configure a replication topology for mobile clients. For more information about merge replication, see the overview of merge replication.</p>

            <h3 class="h5 mt-5 mb-3">What you will learn</h3>
            <p>This tutorial teaches you to use merge replication to publish data from a central database to one or more mobile users so that each user gets a uniquely filtered subset of the data.</p>
            
            <p>In this tutorial, you will learn how to:</p>
            <ul>
                <li>Configure a publisher for merge replication.</li>
                <li>Add a mobile subscriber for merge publication.</li>
                <li>Synchronize the subscription to the merge publication.</li>
            </ul>

            <h3 class="h5 mt-5 mb-3">Prerequisites</h3>
            <p>This tutorial is for users who are familiar with fundamental database operations, but who have limited experience with replication. Before you start this tutorial, you must complete Tutorial: Prepare SQL Server for replication.</p>

            <p>To complete this tutorial, you need SQL Server, SQL Server Management Studio (SSMS), and an AdventureWorks database:</p>

            <h4 class="h6 mt-4 mb-3">At the publisher server (source), install:</h4>
            <ul>
                <li>Any edition of SQL Server, except for SQL Server Express or SQL Server Compact. These editions cannot be a replication publisher.</li>
                <li>The AdventureWorks 2025 sample database. To enhance security, the sample databases are not installed by default.</li>
            </ul>

            <h4 class="h6 mt-4 mb-3">At the subscriber server (destination):</h4>
            <ul>
                <li>Install any edition of SQL Server, except SQL Server Express or SQL Server Compact. The publication that's created in this tutorial does not support either SQL Server Express or SQL Server Compact.</li>
                <li>Install SQL Server Management Studio.</li>
                <li>Install SQL Server 2017 Developer edition.</li>
                <li>Download the AdventureWorks sample database. For instructions on restoring a database in SSMS, see Restoring a database.</li>
            </ul>

            <div class="alert alert-info my-4" role="alert">
                <h5 class="alert-heading"><i class="fas fa-info-circle me-2"></i>Note</h5>
                <ul class="mb-0">
                    <li>Replication is not supported on SQL Server instances that are more than two versions apart.</li>
                    <li>In SQL Server Management Studio, you must connect to the publisher and subscriber by using a login that is a member of the <strong>sysadmin</strong> fixed server role. For more information on this role, see Server-level roles.</li>
                </ul>
            </div>

            <p><strong>Estimated time to complete this tutorial: 60 minutes</strong></p>

            <h3 class="h5 mt-5 mb-3">Configure a publisher for merge replication</h3>
            <p>In this section, you create a merge publication by using SQL Server Management Studio to publish a subset of the <strong>Employee</strong>, <strong>SalesOrderHeader</strong>, and <strong>SalesOrderDetail</strong> tables in the AdventureWorks 2025 sample database. These tables are filtered with parameterized row filters so that each subscription contains a unique partition of the data. You also add the SQL Server login used by the Merge Agent to the publication access list (PAL).</p>

            <h4 class="h6 mt-4 mb-3">Create merge publication and define articles</h4>
            
            <ol>
                <li>Connect to the publisher in SQL Server Management Studio, and then expand the server node.</li>
                <li>Start the SQL Server Agent by right-clicking it in Object Explorer and selecting <strong>Start</strong>. If this step doesn't start the agent, you'll need to manually do so from SQL Server Configuration Manager.</li>
                <li>Expand the <strong>Replication</strong> folder, right-click <strong>Local Publications</strong>, and select <strong>New Publication</strong>. The New Publication Wizard starts.</li>
                <li>On the <strong>Publication Database</strong> page, select <strong>AdventureWorks2025</strong>, and then select <strong>Next</strong>.</li>
                <li>On the <strong>Publication Type</strong> page, select <strong>Merge publication</strong>, and then select <strong>Next</strong>.</li>
            </ol>

            <div class="row my-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-success">
                        <div class="card-header bg-success text-white">
                            <h6 class="mb-0"><i class="fas fa-database me-2"></i>Publication Database</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-0"><strong>Selected:</strong> AdventureWorks2025</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-warning">
                        <div class="card-header bg-warning text-dark">
                            <h6 class="mb-0"><i class="fas fa-code-branch me-2"></i>Publication Type</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-0"><strong>Type:</strong> Merge publication</p>
                        </div>
                    </div>
                </div>
            </div>

            <p>For more information, see:</p>

            <ol start="6">
                <li>On the <strong>Subscriber Types</strong> page, ensure that only <strong>SQL Server 2008 (10.0.x) or later</strong> is selected, and then select <strong>Next</strong>.</li>
            </ol>

            <ol start="10">
                <li>On the <strong>Filter Table Rows</strong> page, select <strong>Employee (Human Resources)</strong>, select <strong>Add</strong>, and then select <strong>Add Join to Extend the Selected Filter</strong>.
                    <ul>
                        <li>a. In the <strong>Add Join</strong> dialog box, select <strong>Sales.SalesOrderHeader</strong> under <strong>Joined table</strong>. Select <strong>Write the join statement manually</strong>, and complete the join statement as follows:</li>
                    </ul>
                </li>
            </ol>

            <div class="code-block bg-dark text-light p-4 rounded-3 my-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="text-muted small">Join Statement</span>
                </div>
<pre class="mb-0"><code>SQL
ON [Employee].[BusinessEntityID] = [SalesOrderHeader].[SalesPersonID]</code></pre>
            </div>

            <ul>
                <li>b. In <strong>Specify join options</strong>, select <strong>Unique key</strong>, and then select <strong>OK</strong>.</li>
            </ul>

            <div class="highlight-box bg-light p-4 rounded-3 my-4 border">
                <h5 class="mb-3"><i class="fas fa-filter text-warning me-2"></i>Filter Table Rows Configuration</h5>
                <p class="mb-2"><strong>Selected Filter:</strong> Employee (Human Resources)</p>
                <p class="mb-2"><strong>Join Configuration:</strong></p>
                <ul class="mb-0">
                    <li><strong>Joined Table:</strong> Sales.SalesOrderHeader</li>
                    <li><strong>Join Type:</strong> Manual join statement</li>
                    <li><strong>Join Options:</strong> Unique key</li>
                    <li><strong>Statement:</strong> <code>[Employee].[BusinessEntityID] = [SalesOrderHeader].[SalesPersonID]</code></li>
                </ul>
            </div>

            <div class="alert alert-info my-4" role="alert">
                <h5 class="alert-heading"><i class="fas fa-info-circle me-2"></i>Filter Configuration Notes</h5>
                <ul class="mb-0">
                    <li>Select a row from this table will go to only one subscription, and select <strong>OK</strong></li>
                    <li>The filter ensures that each subscription gets a unique partition of the data</li>
                    <li>Join filters extend the row filter to related tables</li>
                    <li>Specify join options help optimize the filter performance</li>
                </ul>
            </div>

            <div class="row my-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-primary">
                        <div class="card-header bg-primary text-white">
                            <h6 class="mb-0"><i class="fas fa-table me-2"></i>Base Table</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-0"><strong>Table:</strong> Employee (Human Resources)</p>
                            <p class="card-text small mb-0"><strong>Filter Type:</strong> Parameterized row filter</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-success">
                        <div class="card-header bg-success text-white">
                            <h6 class="mb-0"><i class="fas fa-link me-2"></i>Joined Table</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-0"><strong>Table:</strong> Sales.SalesOrderHeader</p>
                            <p class="card-text small mb-0"><strong>Join Type:</strong> Extended filter join</p>
                        </div>
                    </div>
                </div>
            </div>

            <ol start="11">
                <li>On the <strong>Filter Table Rows</strong> page, select <strong>SalesOrderHeader</strong>, select <strong>Add</strong>, and then select <strong>Add Join to Extend the Selected Filter</strong>.
                    <ul>
                        <li>a. In the <strong>Add Join</strong> dialog box, select <strong>Sales.SalesOrderDetail</strong> under <strong>Joined table</strong>.</li>
                        <li>b. Select <strong>Use the Builder to create the statement</strong>.</li>
                        <li>c. In the <strong>Preview</strong> box, confirm that the join statement is as follows:</li>
                    </ul>
                </li>
            </ol>

            <div class="code-block bg-dark text-light p-4 rounded-3 my-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="text-muted small">Join Statement for SalesOrderDetail</span>
                </div>
<pre class="mb-0"><code>SQL
ON [SalesOrderHeader].[SalesOrderID] = [SalesOrderDetail].[SalesOrderID]</code></pre>
            </div>

            <ul>
                <li>d. In <strong>Specify join options</strong>, select <strong>Unique key</strong>, and then select <strong>OK</strong>. Select <strong>Next</strong>.</li>
            </ul>

            <ol start="12">
                <li>Select <strong>Create a snapshot immediately</strong>, clear <strong>Schedule the snapshot agent to run at the following times</strong>, and select <strong>Next</strong>.</li>
                <li>On the <strong>Agent Security</strong> page, select <strong>Security Settings</strong>. Enter <code>&lt;Publisher_Machine_Name&gt;\\repl_snapshot</code> in the <strong>Process account</strong> box, supply the password for this account, and then select <strong>OK</strong>. Select <strong>Next</strong>.</li>
                <li>On the <strong>Complete the Wizard</strong> page, enter <strong>AdvWorksSalesOrdersMerge</strong> in the <strong>Publication name</strong> box and select <strong>Finish</strong>.</li>
                <li>After the publication is created, select <strong>Close</strong>. Under the <strong>Replication</strong> node in <strong>Object Explorer</strong>, right-click <strong>Local Publications</strong> and select <strong>Refresh</strong> to view your new merge replication.</li>
            </ol>

            <div class="highlight-box bg-success bg-opacity-10 p-4 rounded-3 my-4 border-start border-success border-4">
                <h5 class="mb-3"><i class="fas fa-check-circle text-success me-2"></i>Complete the Wizard - Merge Publication Summary</h5>
                <p class="mb-2"><strong>Publication name:</strong> AdvWorksSalesOrdersMerge</p>
                <p class="mb-2"><strong>Click Finish to perform the following actions:</strong></p>
                <ul class="mb-0">
                    <li>Create the publication.</li>
                </ul>
                <p class="mt-3 mb-2"><strong>A publication will be created with the following options:</strong></p>
                <ul class="mb-0">
                    <li>Create a merge publication from database 'AdventureWorks2012'.</li>
                    <li>The Snapshot Agent process will run under the 'NODE1\\repl_snapshot' account.</li>
                    <li>The publication compatibility level will support Subscribers that are servers running SQL Server 2008 or later.</li>
                    <li>Publish the following tables as articles:
                        <ul>
                            <li>'Employee'</li>
                            <li>'SalesOrderDetail'</li>
                            <li>'SalesOrderHeader'</li>
                        </ul>
                    </li>
                    <li>Exclude columns from the following tables:
                        <ul>
                            <li>'Employee'</li>
                        </ul>
                    </li>
                    <li>Exclude rows of the following tables that do not meet the criteria of their filters:
                        <ul>
                            <li>'Employee'</li>
                        </ul>
                    </li>
                    <li>Apply the first table's filter to the second table based on the defined join statement:
                        <ul>
                            <li>'SalesOrderHeader(Employee)' to 'Employee(SalesOrderHeader)'</li>
                            <li>'SalesOrderDetail(SalesOrderHeader)' to 'SalesOrderHeader(SalesOrderDetail)'</li>
                        </ul>
                    </li>
                    <li>Create a snapshot of this publication immediately after the publication is created.</li>
                </ul>
            </div>

            <div class="row my-4">
                <div class="col-md-4 mb-3">
                    <div class="card h-100 border-primary">
                        <div class="card-header bg-primary text-white">
                            <h6 class="mb-0"><i class="fas fa-users me-2"></i>Employee Table</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-0"><strong>Filter:</strong> Parameterized row filter</p>
                            <p class="card-text small mb-0"><strong>Purpose:</strong> Base table for filtering</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100 border-success">
                        <div class="card-header bg-success text-white">
                            <h6 class="mb-0"><i class="fas fa-file-invoice me-2"></i>SalesOrderHeader</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-0"><strong>Join:</strong> Employee.BusinessEntityID</p>
                            <p class="card-text small mb-0"><strong>Purpose:</strong> Extended filter join</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100 border-warning">
                        <div class="card-header bg-warning text-dark">
                            <h6 class="mb-0"><i class="fas fa-list me-2"></i>SalesOrderDetail</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-0"><strong>Join:</strong> SalesOrderHeader.SalesOrderID</p>
                            <p class="card-text small mb-0"><strong>Purpose:</strong> Detail records</p>
                        </div>
                    </div>
                </div>
            </div>

            <ol start="2">
                <li>In the <strong>Local Publications</strong> folder, right-click <strong>AdvWorksSalesOrdersMerge</strong>, and then select <strong>View Snapshot Agent Status</strong>.</li>
                <li>The current status of the Snapshot Agent job for the publication appears. Ensure that the snapshot job has succeeded before you continue to the next lesson.</li>
            </ol>

            <div class="row my-4">
                <div class="col-12">
                    <div class="card border-success">
                        <div class="card-header bg-success text-white">
                            <h6 class="mb-0"><i class="fas fa-camera me-2"></i>View Snapshot Agent Status - AdvWorksSalesOrdersMerge</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-2"><strong>Agent type:</strong> Snapshot Agent</p>
                            <p class="card-text small mb-2"><strong>Publication:</strong> AdvWorksSalesOrdersMerge</p>
                            <p class="card-text small mb-2"><strong>Publication database:</strong> [AdventureWorks2012]</p>
                            <p class="card-text small mb-2"><strong>Duration:</strong> 00:00:02</p>
                            <p class="card-text small mb-0"><strong>Last status message:</strong> <span class="text-success">[100%] A snapshot of 3 article(s) was generated.</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <h4 class="h6 mt-5 mb-3">Add the Merge Agent login to the PAL</h4>
            
            <ol>
                <li>Connect to the publisher in SQL Server Management Studio, expand the server node, and then expand the <strong>Replication</strong> folder.</li>
                <li>In the <strong>Local Publications</strong> folder, right-click <strong>AdvWorksSalesOrdersMerge</strong>, and then select <strong>Properties</strong>.
                    <ul>
                        <li>a. Select the <strong>Publication Access List</strong> page, and select <strong>Add</strong>.</li>
                        <li>b. In the <strong>Add Publication Access</strong> dialog box, select <code>&lt;Publisher_Machine_Name&gt;\\repl_merge</code> and select <strong>OK</strong>. Select <strong>OK</strong> again.</li>
                    </ul>
                </li>
            </ol>

            <p>For more information, see:</p>

            <h3 class="h5 mt-5 mb-3">Create a subscription to the merge publication</h3>
            <p>In this section, you add a subscription to the merge publication that you created previously. This tutorial uses the remote subscriber (NODE2\\SQL2016). You then set permissions on the subscription database and manually generate the filtered data snapshot for the new subscription.</p>

            <h4 class="h6 mt-4 mb-3">Add a subscriber for merge publication</h4>
            
            <ol>
                <li>Connect to the subscriber in SQL Server Management Studio, and expand the server node. Expand the <strong>Replication</strong> folder, right-click the <strong>Local Subscriptions</strong> folder, and then select <strong>New Subscriptions</strong>. The New Subscription Wizard starts.</li>
                <li>On the <strong>Publication</strong> page, select <strong>Find SQL Server Publisher</strong> in the <strong>Publisher</strong> list.</li>
            </ol>

            <p>In the <strong>Connect to Server</strong> dialog box, enter the name of the publisher instance in the <strong>Server name</strong> box, and select <strong>Connect</strong>.</p>

            <ol start="3">
                <li>Select <strong>AdvWorksSalesOrdersMerge</strong>, and select <strong>Next</strong>.</li>
                <li>On the <strong>Merge Agent Location</strong> page, select <strong>Run each agent at its Subscriber</strong>, and then select <strong>Next</strong>.</li>
                <li>On the <strong>Subscribers</strong> page, select the instance name of the subscriber server. Under <strong>Subscription Database</strong>, select <strong>New Database</strong> from the list.</li>
            </ol>

            <p>In the <strong>New Database</strong> dialog box, enter <strong>SalesOrdersReplica</strong> in the <strong>Database name</strong> box. Select <strong>OK</strong>, and then select <strong>Next</strong>.</p>

            <div class="highlight-box bg-light p-4 rounded-3 my-4 border">
                <h5 class="mb-3"><i class="fas fa-server text-primary me-2"></i>Merge Agent Location Options</h5>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card border-info h-100">
                            <div class="card-body">
                                <h6 class="card-title text-info">Run all agents at the Distributor (push subscriptions)</h6>
                                <p class="card-text small">This option makes it easier to administer the synchronization of subscriptions centrally.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card border-success h-100">
                            <div class="card-body">
                                <h6 class="card-title text-success">Run each agent at its Subscriber (pull subscriptions) ✓</h6>
                                <p class="card-text small">This option reduces the processing overhead at the Distributor and lets each Subscriber administer the synchronization of its subscription.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="table-responsive my-4">
                <table class="table table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th>Subscriber</th>
                            <th>Subscription Database</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-success">
                            <td><input type="checkbox" checked disabled> <strong>NODE2\\SQL2016</strong></td>
                            <td><strong>SalesOrdersReplica</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ol start="6">
                <li>On the <strong>Merge Agent Security</strong> page, select the ellipsis (<strong>...</strong>) button. Enter <code>&lt;Subscriber_Machine_Name&gt;\\repl_merge</code> in the <strong>Process account</strong> box, and supply the password for this account. Select <strong>OK</strong>, select <strong>Next</strong>, and then select <strong>Next</strong> again.</li>
                <li>On the <strong>Synchronization Schedule</strong> page, set <strong>Agent Schedule</strong> to <strong>Run on demand only</strong>. Select <strong>Next</strong>.</li>
            </ol>

            <div class="row my-4">
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-primary">
                        <div class="card-header bg-primary text-white">
                            <h6 class="mb-0"><i class="fas fa-user-cog me-2"></i>Merge Agent Security</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-2"><strong>Process account:</strong> <code>&lt;Subscriber_Machine_Name&gt;\\repl_merge</code></p>
                            <p class="card-text small mb-2"><strong>Connect to Publisher:</strong> By impersonating the process account</p>
                            <p class="card-text small mb-0"><strong>Connect to Subscriber:</strong> By impersonating the process account</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card h-100 border-warning">
                        <div class="card-header bg-warning text-dark">
                            <h6 class="mb-0"><i class="fas fa-clock me-2"></i>Synchronization Schedule</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-2"><strong>Agent Schedule:</strong> Run on demand only</p>
                            <p class="card-text small mb-0"><strong>Subscriber:</strong> NODE2\\SQL2016</p>
                        </div>
                    </div>
                </div>
            </div>

            <ol start="8">
                <li>On the <strong>Initialize Subscriptions</strong> page, select <strong>At first synchronization</strong> from the <strong>Initialize When</strong> list. Select <strong>Next</strong> to proceed to the <strong>Subscription Type</strong> page, and select the appropriate subscription type. This tutorial uses <strong>Client</strong>. After you select the subscription type, select <strong>Next</strong> again.</li>
                <li>On the <strong>HOST_NAME Values</strong> page, enter a value of <strong>adventure-works\\pamela0</strong> in the <strong>HOST_NAME Value</strong> box. Then select <strong>Finish</strong>.</li>
                <li>Select <strong>Finish</strong> again. After the subscription is created, select <strong>Close</strong>.</li>
            </ol>

            <div class="highlight-box bg-light p-4 rounded-3 my-4 border">
                <h5 class="mb-3"><i class="fas fa-user text-info me-2"></i>HOST_NAME Values Configuration</h5>
                <p class="mb-2"><strong>Purpose:</strong> Specify HOST_NAME function values, which are used to filter data in each subscription.</p>
                <div class="table-responsive">
                    <table class="table table-sm table-bordered mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>Subscriber</th>
                                <th>HOST_NAME Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-info">
                                <td>NODE2\\SQL2016</td>
                                <td><strong>adventure-works\\pamela0</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h4 class="h6 mt-5 mb-3">Set server permissions at the subscriber</h4>
            
            <ol>
                <li>Connect to the subscriber in SQL Server Management Studio. Expand <strong>Security</strong>, right-click <strong>Logins</strong>, and then select <strong>New Login</strong>.</li>
            </ol>

            <p>On the <strong>General</strong> page, select <strong>Search</strong> and then enter <code>&lt;Subscriber_Machine_Name&gt;\\repl_merge</code> in the <strong>Enter the Object Name</strong> box. Select <strong>Check Names</strong>, and then select <strong>OK</strong>.</p>

            <ol start="2">
                <li>On the <strong>User Mapping</strong> page, select the <strong>SalesOrdersReplica</strong> database and select the <strong>db_owner</strong> role. On the <strong>Securables</strong> page, grant the <strong>Explicit</strong> permission to <strong>Alter Trace</strong>. Select <strong>OK</strong>.</li>
            </ol>

            <div class="row my-4">
                <div class="col-12">
                    <div class="card border-success">
                        <div class="card-header bg-success text-white">
                            <h6 class="mb-0"><i class="fas fa-database me-2"></i>User Mapping Configuration</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-2"><strong>Login:</strong> NODE2\\repl_merge</p>
                            <p class="card-text small mb-2"><strong>Database:</strong> SalesOrdersReplica</p>
                            <p class="card-text small mb-2"><strong>Role:</strong> db_owner</p>
                            <p class="card-text small mb-0"><strong>Securables:</strong> Alter Trace (Explicit permission granted)</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="h5 mt-5 mb-3">Final Steps</h3>
            <p>You have successfully configured merge replication between a server and mobile clients. The subscription is now ready for synchronization, and the filtered data will be replicated based on the HOST_NAME value specified for each subscriber.</p>

            <div class="alert alert-success my-4" role="alert">
                <h5 class="alert-heading"><i class="fas fa-check-circle me-2"></i>Merge Replication Setup Complete!</h5>
                <p class="mb-0">You have successfully configured merge replication for mobile clients. Each subscriber will receive a uniquely filtered subset of data based on their HOST_NAME value, making this ideal for mobile scenarios where different users need different data partitions.</p>
            </div>

            <h3 class="h5 mt-5 mb-3">Start synchronization and initialize the subscription</h3>
            
            <ol>
                <li>Connect to the subscriber in SQL Server Management Studio.</li>
                <li>Make sure that the SQL Server Agent is running. If it's not, right-click the SQL Server Agent in Object Explorer and select <strong>Start</strong>. If this step fails to start your agent, you'll need to do so manually by using SQL Server Configuration Manager.</li>
                <li>Expand the <strong>Replication</strong> node. In the <strong>Local Subscriptions</strong> folder, right-click the subscription in the <strong>SalesOrdersReplica</strong> database, and then select <strong>View Synchronization Status</strong>.</li>
            </ol>

            <p>Select <strong>Start</strong> to initialize the subscription.</p>

            <div class="row my-4">
                <div class="col-12">
                    <div class="card border-success">
                        <div class="card-header bg-success text-white">
                            <h6 class="mb-0"><i class="fas fa-sync me-2"></i>View Synchronization Status - SalesOrdersReplica</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text small mb-2"><strong>Subscription:</strong> AdvWorksSalesOrdersMerge</p>
                            <p class="card-text small mb-2"><strong>Publication:</strong> AdvWorksSalesOrdersMerge</p>
                            <p class="card-text small mb-2"><strong>Publication Database:</strong> NODE1\\SQL2016:[AdventureWorks2012]</p>
                            <p class="card-text small mb-2"><strong>Duration:</strong> 00:00:02</p>
                            <p class="card-text small mb-0"><strong>Last status message:</strong> <span class="text-success">The merge process completed successfully.</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <p>In this section, you start the Merge Agent to initialize the subscription by using SQL Server Management Studio. You also use this procedure to synchronize with the publisher.</p>

            <h4 class="h6 mt-5 mb-3">Create the filtered data snapshot for the subscription</h4>
            
            <ol>
                <li>Connect to the publisher in SQL Server Management Studio, expand the server node, and then expand the <strong>Replication</strong> folder.</li>
                <li>In the <strong>Local Publications</strong> folder, right-click the <strong>AdvWorksSalesOrdersMerge</strong> publication, and then select <strong>Properties</strong>.
                    <ul>
                        <li>a. Select the <strong>Data Partitions</strong> page, and select <strong>Add</strong>.</li>
                        <li>b. In the <strong>Add Data Partition</strong> dialog box, enter <strong>adventure-works\\pamela0</strong> in the <strong>HOST_NAME Value</strong> box, and then select <strong>OK</strong>.</li>
                        <li>c. Select the newly added partition, select <strong>Generate the selected snapshots now</strong>, and then select <strong>OK</strong>.</li>
                    </ul>
                </li>
            </ol>

            <div class="highlight-box bg-light p-4 rounded-3 my-4 border">
                <h5 class="mb-3"><i class="fas fa-database text-primary me-2"></i>Data Partition Configuration</h5>
                <p class="mb-2"><strong>Purpose:</strong> Create filtered snapshots for specific subscribers based on HOST_NAME values.</p>
                <div class="table-responsive">
                    <table class="table table-sm table-bordered mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>HOST_NAME Value</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-success">
                                <td><strong>adventure-works\\pamela0</strong></td>
                                <td>Generated</td>
                                <td>Snapshot created for filtered data</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <p>For more information, see:</p>

            <h3 class="h5 mt-5 mb-3">Synchronize the subscription to the merge publication</h3>

            <div class="alert alert-success my-4" role="alert">
                <h5 class="alert-heading"><i class="fas fa-check-circle me-2"></i>Tutorial Complete!</h5>
                <p class="mb-0">You have successfully configured and synchronized merge replication between a server and mobile clients. The subscription is now active and will replicate filtered data based on the HOST_NAME parameter, making it perfect for mobile scenarios where each user needs their own data partition.</p>
            </div>

            <h3 class="h5 mt-5 mb-3">Final Conclusion</h3>
            <p>You have successfully completed both transactional and merge replication tutorials. These comprehensive guides provide you with the knowledge to implement robust SQL Server High Availability and Disaster Recovery solutions for your enterprise applications.</p>
`,
        tags: ['SQL Server', 'High Availability', 'Disaster Recovery', 'Always On', 'Database', 'Failover Clustering', 'Log Shipping'],
        relatedPosts: ['sql-server-optimization-2025', 'cloud-database-migration-strategies']
    }
};

module.exports = newBlogs;
