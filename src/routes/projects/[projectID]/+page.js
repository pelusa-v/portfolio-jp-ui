/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (params.projectID === 'pelusa') {
        return {
            projectTitle: 'Pelusa Project',
            content: 'This project is about generation of pelusaS'
        };
    } else {
        return {
            projectTitle: 'Unknown Project',
            content: 'NO information available'
        };
    }
}