export function getFileNameFromFullPath(filePath) {
    function getFileName(path) {
        return path.split("\\").slice(-1)[0].split('.')[0];
    };
};