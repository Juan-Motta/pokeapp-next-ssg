import AvailableColorFilters from './AvailableColorFilters';
import AvailableGenderFilters from './AvailableGenderFilters';
import AvailableTypeFilters from './AvalaibleTypeFilters';
import { SelectedFilters } from './SelectedFilters';

export default function Sidebar() {
    return (
        <>
            <div>
                <SelectedFilters />
            </div>
            <div>
                <AvailableTypeFilters />
            </div>
            <div>
                <AvailableColorFilters />
            </div>
            <div>
                <AvailableGenderFilters />
            </div>
        </>
    );
}
