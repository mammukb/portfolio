import Link from "next/link";

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-dark py-24 px-6 md:px-12 text-gray-300 font-inter">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blogs"
          className="inline-flex items-center text-gray-400 hover:text-gold transition-colors font-inter text-sm font-medium mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
          Back to Blogs
        </Link>
        
        <article>
          <h1 className="text-4xl md:text-5xl text-white mb-6 font-syne font-bold leading-tight">The Ultimate Git & GitHub Cheat Sheet for Beginners</h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-12 pb-12 border-b border-white/10">
            <span>Aug 08, 2026</span>
            <span>•</span>
            <span className="px-3 py-1 bg-gold/10 text-gold rounded-full border border-gold/20">Git</span>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              If you are learning to code, you’ve probably heard the words "Git" and "GitHub" thrown around constantly. They can seem intimidating at first, but they are absolute superpowers for developers.
            </p>

            <p>
              I created this guide (and use it myself!) to serve as a quick reference for the most common Git commands and to explain exactly how Git and GitHub work together.
            </p>

            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">🔀 Git vs. GitHub: What's the Difference?</h2>

            <p>The biggest hurdle for beginners is usually understanding that Git and GitHub are not the same thing.</p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">What is Git?</h3>
            <p>
              Git is a Version Control System (VCS). It is a piece of software that you install on your local computer. Its job is to track changes to your files over time.
            </p>
            <p>
              Think of it like a time machine for your code. If you make a mistake and break your project, Git allows you to "time travel" back to a previous, working version. It works offline.
            </p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">What is GitHub?</h3>
            <p>
              GitHub is a cloud-based hosting service that lets you manage your Git repositories online.
            </p>
            <p>
              Think of it as a social network and cloud storage (like Google Drive) specifically built for code. It allows you to back up your work, share it with others, and collaborate on projects with developers around the world.
            </p>
            
            <p className="p-6 bg-white/5 rounded-xl border border-white/10 mt-8 mb-8 text-base">
              <strong className="text-white">TL;DR:</strong> Git is the tool you use locally to track changes. GitHub is the website where you upload those tracked changes to share and back them up.
            </p>

            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">🛠️ The Essential Git Command Cheat Sheet</h2>
            <p>Here are the commands you will use 95% of the time.</p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">1. Setting Up (Do this once per project/computer)</h3>
            <p>Before you can do anything, you need to tell Git who you are so it can attach your name to your work.</p>
            
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`# Set your name
git config --global user.name "Your Name"

# Set your email (use the one attached to your GitHub account)
git config --global user.email "your.email@example.com"`}</code>
            </pre>

            <p>To start using Git in a brand new project folder on your computer:</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`# Initializes a new, empty Git repository in your current folder
git init`}</code>
            </pre>

            <p>To download an existing project from GitHub to your computer:</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`# Clones a remote repository to your local machine
git clone <url-of-the-github-repo>`}</code>
            </pre>

            <h3 className="text-xl text-white font-syne font-bold mt-12 mb-4">2. The Daily Workflow: Add, Commit, Push</h3>
            <p>This is the cycle you will repeat constantly while coding.</p>

            <h4 className="text-lg text-white font-bold mt-6 mb-2">Step A: Check what changed</h4>
            <p>Always check the status of your files before saving them.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-4 mb-8 text-sm font-mono text-gray-300">
              <code>{`# Shows which files have been modified, added, or deleted
git status`}</code>
            </pre>

            <h4 className="text-lg text-white font-bold mt-6 mb-2">Step B: Stage your changes</h4>
            <p>Git doesn't automatically track every file you save. You have to explicitly tell it which files you want to include in the next "snapshot." This is called staging.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-4 mb-8 text-sm font-mono text-gray-300">
              <code>{`# Add a specific file to the staging area
git add index.html 

# Add ALL changed files to the staging area (very common!)
git add .`}</code>
            </pre>

            <h4 className="text-lg text-white font-bold mt-6 mb-2">Step C: Save your snapshot (Commit)</h4>
            <p>Now you take the actual snapshot of the staged files. You must include a brief message explaining what you changed.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-4 mb-8 text-sm font-mono text-gray-300">
              <code>{`# Commits your staged changes with a descriptive message
git commit -m "Added a new navigation bar"`}</code>
            </pre>

            <h4 className="text-lg text-white font-bold mt-6 mb-2">Step D: Send it to the cloud (Push)</h4>
            <p>Your changes are now safely saved in Git on your local computer. To back them up to GitHub, you push them.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-4 mb-4 text-sm font-mono text-gray-300">
              <code>{`# Uploads your local branch commits to the remote repository (GitHub)
git push origin main`}</code>
            </pre>
            <p className="text-sm italic text-gray-500 mb-8">(Note: <code className="bg-white/10 px-1 py-0.5 rounded">main</code> is usually the default branch name. Sometimes older projects use <code className="bg-white/10 px-1 py-0.5 rounded">master</code>).</p>

            <h3 className="text-xl text-white font-syne font-bold mt-12 mb-4">3. Working with Branches</h3>
            <p>Branching allows you to create a separate copy of your code to experiment on without breaking the main project.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`# List all your local branches
git branch

# Create a brand new branch called "new-feature"
git branch new-feature

# Switch from your current branch to the "new-feature" branch
git checkout new-feature

# Shortcut: Create a new branch AND switch to it instantly
git checkout -b new-feature`}</code>
            </pre>

            <h3 className="text-xl text-white font-syne font-bold mt-12 mb-4">4. Updating your Local Code</h3>
            <p>If you are working with others, or if you made changes on GitHub directly, you need to pull those changes down to your computer.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`# Downloads the latest changes from GitHub and merges them into your local code
git pull origin main`}</code>
            </pre>

            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">🔄 The Typical Solo Developer Workflow</h2>
            <p>If you are working on a personal project for your portfolio, your workflow will almost always look like this:</p>
            <ol className="list-decimal pl-6 mb-8 space-y-3">
              <li>Write code in your editor (like VS Code).</li>
              <li>Run <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-gold">git status</code> to see what files you changed.</li>
              <li>Run <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-gold">git add .</code> to stage all the changes.</li>
              <li>Run <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-gold">git commit -m "Briefly explain what you did"</code> to save the snapshot locally.</li>
              <li>Run <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-gold">git push origin main</code> to back up the code to your GitHub profile.</li>
              <li>Repeat!</li>
            </ol>

            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">💡 Pro-Tips for Beginners</h2>
            <ul className="list-disc pl-6 mb-8 space-y-4">
              <li><strong className="text-white">Commit often:</strong> Don't wait until you've built an entire website to commit. Commit every time you finish a small, logical chunk of work (e.g., "styled the footer", "fixed the login bug").</li>
              <li><strong className="text-white">Write good commit messages:</strong> "Fixed stuff" is a bad message. "Fixed alignment issue on mobile homepage" is a great message. Your future self will thank you.</li>
              <li><strong className="text-white">Don't panic if things break:</strong> Git is literally designed to prevent you from losing work. If you mess up, you can always revert to a previous commit.</li>
            </ul>

            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">Conclusion</h2>
            <p>
              Mastering Git and GitHub takes a little practice, but once you memorize these basic commands, it becomes muscle memory. Keep this cheat sheet handy, and happy coding!
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
