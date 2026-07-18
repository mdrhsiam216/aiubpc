import { Route, Switch } from 'wouter';
import { AuthProvider } from '@/contexts/AuthContext';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Team from '@/pages/Team';
import Partners from '@/pages/Partners';

export default function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/partners" component={Partners} />
        <Route>
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
              <h1 className="text-6xl font-serif text-gray-900 mb-4">404</h1>
              <p className="text-gray-600 mb-8">Page not found</p>
              <a href="/" className="text-blue-600 hover:underline text-sm tracking-widest uppercase">
                Go Home
              </a>
            </div>
          </div>
        </Route>
      </Switch>
    </AuthProvider>
  );
}
