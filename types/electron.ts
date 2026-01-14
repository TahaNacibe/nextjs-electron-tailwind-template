interface Window {
    electronAPI?: {
        // windows api control
        controlWindow: (action: 'minimize' | 'maximize' | 'close') => void;
        
        // files access api
        filesAPI: (payload:
            {
                action: 'read' | 'createFolder' | 'createFile' | 'editFile' | 'delete',
                dirPath: string,
                options?: {
                    folderName?: string,
                    fileName?: string,
                    content?: string,
                    targetPath?: string
                }
            }) => Promise<{ success: boolean, data: any }>
    }
}