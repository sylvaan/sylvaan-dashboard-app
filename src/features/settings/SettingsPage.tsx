const SettingsPage = () => {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Preferences</h1>
  
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-lg">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="favorite-team" className="block text-sm font-medium text-gray-700 mb-1">
                Favorite Team
              </label>
              <select
                id="favorite-team"
                name="favorite-team"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border"
                defaultValue="Liverpool"
              >
                <option>Arsenal</option>
                <option>Liverpool</option>
                <option>Man City</option>
                <option>Man Utd</option>
              </select>
            </div>
  
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                onClick={() => alert('Settings saved!')}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default SettingsPage;
  
