import { fileSystem } from '../data/fileSystem'

export const executeCommand = (
  cmd: string,
  currentPath: string,
  setCurrentPath: (path: string) => void
): string[] => {
  const args = cmd.trim().split(' ')
  const command = args[0].toLowerCase()

  switch (command) {
    case 'ls':
      const currentDir = fileSystem[currentPath]
      if (currentDir && currentDir.type === 'directory') {
        return currentDir.contents!.map(item => {
          const fullPath = currentPath === '/' ? `/${item}` : `${currentPath}/${item}`
          const itemData = fileSystem[fullPath.replace(/\/+/g, '/')]
          if (itemData?.type === 'directory') {
            return `📁 ${item}`
          }
          return `📄 ${item}`
        })
      }
      return ['ls: cannot access directory']

    case 'cat':
      if (args.length < 2) return ['cat: missing file operand']
      const fileName = args[1]
      const filePath = currentPath === '/' ? `/${fileName}` : `${currentPath}/${fileName}`
      const file = fileSystem[filePath]
      if (file && file.type === 'file') {
        return file.content!.split('\n')
      }
      return [`cat: ${fileName}: No such file or directory`]

    case 'cd':
      if (args.length < 2) {
        setCurrentPath('/home/kwanjoon-park')
        return []
      }
      const targetDir = args[1]
      let newPath: string

      if (targetDir.startsWith('/')) {
        newPath = targetDir
      } else if (targetDir === '..') {
        const pathParts = currentPath.split('/').filter(p => p)
        pathParts.pop()
        newPath = pathParts.length ? `/${pathParts.join('/')}` : '/home/kwanjoon-park'
      } else {
        newPath = currentPath === '/' ? `/${targetDir}` : `${currentPath}/${targetDir}`
      }

      const targetDirData = fileSystem[newPath]
      if (targetDirData && targetDirData.type === 'directory') {
        setCurrentPath(newPath)
        return []
      }
      return [`cd: ${targetDir}: No such file or directory`]

    case 'pwd':
      return [currentPath]

    case 'whoami':
      return ['kwanjoon-park']

    case 'clear':
      return []

    case 'python3':
      if (args[1] === 'skills.py') {
        const skillsFile = fileSystem[`${currentPath}/skills.py`]
        if (skillsFile && skillsFile.type === 'file') {
          return [
            '=== Technical Skills Assessment ===',
            '',
            'Frontend:',
            '  React: ██████████ 90%',
            '  TypeScript: ████████░░ 85%',
            '  Next.js: ████████░░ 80%',
            '  Vue.js: ███████░░░ 75%',
            '  CSS/SCSS: ████████░░ 85%',
            '',
            'Backend:',
            '  Node.js: ████████░░ 85%',
            '  Python: ████████░░ 80%',
            '  Java: ███████░░░ 75%',
            '  Express: ████████░░ 85%',
            '  FastAPI: ███████░░░ 70%',
            '',
            'Database:',
            '  MySQL: ████████░░ 80%',
            '  MongoDB: ███████░░░ 75%',
            '  PostgreSQL: ███████░░░ 70%',
            '  Redis: ██████░░░░ 65%',
            '',
            'DevOps:',
            '  Docker: ███████░░░ 75%',
            '  AWS: ███████░░░ 70%',
            '  Git: ██████████ 90%',
            '  Linux: ████████░░ 80%'
          ]
        }
      }
      return [`python3: can't open file '${args[1]}': [Errno 2] No such file or directory`]

    case 'help':
      return [
        'Available Commands:',
        '  ls              - List directory contents',
        '  cd <directory>  - Change directory',
        '  cat <file>      - Display file contents',
        '  pwd             - Show current directory',
        '  clear           - Clear terminal',
        '  whoami          - Display current user',
        '  python3 <file>  - Execute Python file',
        '  help            - Show this help message',
        '',
        'Navigation Tips:',
        '  cd ..           - Go to parent directory',
        '  cd              - Go to home directory',
        '  ls projects/    - List projects directory',
        '',
        'Try: cat about.json, python3 skills.py, cat contact.txt'
      ]

    case '':
      return []

    default:
      return [`bash: ${command}: command not found`]
  }
}