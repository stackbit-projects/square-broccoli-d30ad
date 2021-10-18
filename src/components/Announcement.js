import React from 'react';
import _ from 'lodash';

import { classNames, markdownify, getPageUrl } from '../utils';
import Icon from './Icon';

export default class Announcement extends React.Component {
    constructor(props) {
        super(props);
        this.anncmntRef = React.createRef();

        this.state = {
            isHidden: true
        };
    }

    componentDidMount() {
        const anncmntElm = this.anncmntRef.current;
        if (anncmntElm) {
            const anncmntKey = 'hide-announcement-bar';
            const anncmntCurrentValue = anncmntElm.dataset.anncmntId;
            if (hasLocalStorage) {
                if (localStorage.getItem(anncmntKey) != anncmntCurrentValue ) {
                    this.setState({
                        isHidden: false
                    })
                }
            }
        }
    }

    handleAnncmntClose() {
        const anncmntElm = this.anncmntRef.current;
        const anncmntKey = 'hide-announcement-bar';
        const anncmntCurrentValue = anncmntElm.dataset.anncmntId;

        this.setState({
            isHidden: true
        })

        if (hasLocalStorage) {
            localStorage.setItem(anncmntKey, anncmntCurrentValue);
        }
    }

    renderAnncmnt(anncmnt) {
        const anncmntId = _.get(anncmnt, 'anncmnt_id');
        const anncmntContent = _.get(anncmnt, 'anncmnt_content');
        const anncmntAlignX = _.get(anncmnt, 'anncmnt_align', 'left');
        const anncmntHasClose = _.get(anncmnt, 'anncmnt_has_close');

        const { isHidden } = this.state;

        return (
            <div>
    
            </div>
        );
    }

    render() {
        const page = _.get(this.props, 'page');
        const pageUrl = getPageUrl(page);
        const anncmnt = _.get(this.props, 'anncmnt');
        const anncmntHomeOnly = _.get(anncmnt, 'anncmnt_is_home_only');

        return (
            anncmntHomeOnly ? (
                (pageUrl === '/') && this.renderAnncmnt(anncmnt)
            ) : (
                this.renderAnncmnt(anncmnt)
            )
        );
    }
}

const hasLocalStorage = (function() {
    try {
        localStorage.setItem('__test', true);
        localStorage.removeItem('__test');
        return true;
    } catch (exception) {
        return false;
    }
}());
