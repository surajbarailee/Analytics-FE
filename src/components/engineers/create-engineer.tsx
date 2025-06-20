import { useNavigate } from 'react-router-dom'

export default function CreateEngineerPage() {
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically save the engineer data
        console.log('Engineer created!')
        // Navigate back to engineers list
        navigate('/engineers/all')
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Create Engineer</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-2">
                        Role
                    </label>
                    <select
                        id="role"
                        name="role"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select a role</option>
                        <option value="frontend">Frontend Developer</option>
                        <option value="backend">Backend Developer</option>
                        <option value="fullstack">Full Stack Developer</option>
                        <option value="devops">DevOps Engineer</option>
                    </select>
                </div>
                
                <div className="flex gap-3 pt-4">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Create Engineer
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/engineers/all')}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}
